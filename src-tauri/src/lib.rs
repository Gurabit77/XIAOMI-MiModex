// MiModex — Tauri Backend

use std::collections::HashSet;
use std::time::Duration;
use tauri::Manager;

#[derive(serde::Serialize)]
struct SystemDiagnosticItem {
    key: String,
    label: String,
    ok: bool,
    detail: String,
}

#[tauri::command]
async fn mimo_chat_completions(
    base_url: String,
    api_key: String,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    let endpoint = format!("{}/chat/completions", openai_base_url(&base_url));
    let response = reqwest::Client::new()
        .post(endpoint)
        .header("content-type", "application/json")
        .header("api-key", api_key)
        .json(&payload)
        .send()
        .await
        .map_err(|err| format!("MiMo API 请求失败：{err}"))?;

    let status = response.status();
    let text = response
        .text()
        .await
        .map_err(|err| format!("读取 MiMo API 响应失败：{err}"))?;

    if !status.is_success() {
        return Err(if text.trim().is_empty() {
            format!("MiMo API 返回 HTTP {status}")
        } else {
            format!("MiMo API 返回 HTTP {status}: {text}")
        });
    }

    serde_json::from_str(&text).map_err(|err| format!("解析 MiMo API JSON 失败：{err}"))
}

#[tauri::command]
async fn mimo_anthropic_messages(
    base_url: String,
    api_key: String,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    let endpoint = format!("{}/v1/messages", anthropic_base_url(&base_url));
    let response = reqwest::Client::new()
        .post(endpoint)
        .header("content-type", "application/json")
        .header("api-key", api_key.clone())
        .header("x-api-key", api_key)
        .header("anthropic-version", "2023-06-01")
        .json(&payload)
        .send()
        .await
        .map_err(|err| format!("MiMo Anthropic API 请求失败：{err}"))?;

    let status = response.status();
    let text = response
        .text()
        .await
        .map_err(|err| format!("读取 MiMo Anthropic API 响应失败：{err}"))?;

    if !status.is_success() {
        return Err(if text.trim().is_empty() {
            format!("MiMo Anthropic API 返回 HTTP {status}")
        } else {
            format!("MiMo Anthropic API 返回 HTTP {status}: {text}")
        });
    }

    serde_json::from_str(&text).map_err(|err| format!("解析 MiMo Anthropic API JSON 失败：{err}"))
}

#[tauri::command]
async fn web_search_documents(query: String, limit: usize) -> Result<serde_json::Value, String> {
    let count = limit.clamp(1, 10);
    let encoded_query = urlencoding::encode(query.trim());
    let endpoints = vec![
        format!("https://lite.duckduckgo.com/lite/?q={encoded_query}"),
        format!("https://html.duckduckgo.com/html/?q={encoded_query}"),
        format!("https://www.bing.com/search?q={encoded_query}"),
        format!("https://r.jina.ai/http://lite.duckduckgo.com/lite/?q={encoded_query}"),
        format!("https://r.jina.ai/http://www.bing.com/search?q={encoded_query}"),
    ];
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(20))
        .user_agent("Mozilla/5.0 MiModex/1.0")
        .build()
        .map_err(|err| format!("创建搜索客户端失败：{err}"))?;
    let mut errors = Vec::new();

    for endpoint in endpoints {
        let response = match client.get(&endpoint).header("accept", "text/html,text/plain").send().await {
            Ok(response) => response,
            Err(err) => {
                errors.push(format!("{endpoint}: {err}"));
                continue;
            }
        };

        let status = response.status();
        let text = match response.text().await {
            Ok(text) => text,
            Err(err) => {
                errors.push(format!("{endpoint}: 读取响应失败：{err}"));
                continue;
            }
        };

        if status.is_success() {
            return Ok(serde_json::json!({
                "query": query,
                "results": parse_search_results(&text, count),
                "rawText": text,
                "sourceUrl": endpoint,
            }));
        }

        errors.push(if text.trim().is_empty() {
            format!("{endpoint}: HTTP {status}")
        } else {
            format!("{endpoint}: HTTP {status}: {text}")
        });
    }

    Err(format!("联网搜索请求失败：{}", errors.join("；")))
}

#[tauri::command]
fn system_diagnostics(app: tauri::AppHandle) -> Vec<SystemDiagnosticItem> {
    let mut items = Vec::new();

    let bundle_dir = app
        .path()
        .resource_dir()
        .ok()
        .and_then(|path| path.parent().and_then(|p| p.parent()).map(|p| p.to_path_buf()));
    let bundle_detail = bundle_dir
        .as_ref()
        .map(|path| path.display().to_string())
        .unwrap_or_else(|| "无法定位 .app bundle".to_string());
    items.push(SystemDiagnosticItem {
        key: "bundle".to_string(),
        label: "App Bundle".to_string(),
        ok: bundle_dir.as_ref().is_some_and(|path| path.exists()),
        detail: bundle_detail,
    });

    let main_executable = app.path().resource_dir().ok().and_then(|resource_dir| {
        resource_dir
            .parent()
            .map(|contents_dir| contents_dir.join("MacOS").join("mimodex"))
    });
    items.push(SystemDiagnosticItem {
        key: "main-executable".to_string(),
        label: "主程序".to_string(),
        ok: main_executable.as_ref().is_some_and(|path| path.exists()),
        detail: main_executable
            .as_ref()
            .map(|path| path.display().to_string())
            .unwrap_or_else(|| "无法定位 Contents/MacOS/mimodex".to_string()),
    });

    let sidecar_path = main_executable
        .as_ref()
        .and_then(|path| path.parent().map(|dir| dir.join("mimo-code-engine")));
    items.push(SystemDiagnosticItem {
        key: "embedded-engine".to_string(),
        label: "内置 MiMo Code Engine".to_string(),
        ok: sidecar_path.as_ref().is_some_and(|path| path.exists()),
        detail: sidecar_path
            .as_ref()
            .map(|path| path.display().to_string())
            .unwrap_or_else(|| "无法定位 Contents/MacOS/mimo-code-engine".to_string()),
    });

    let config_path = std::env::var_os("HOME")
        .map(std::path::PathBuf::from)
        .map(|home| home.join(".mimo").join("mimo.config.json"));
    let config_ok = config_path.as_ref().is_some_and(|path| path.exists());
    items.push(SystemDiagnosticItem {
        key: "config-file".to_string(),
        label: "配置文件".to_string(),
        ok: config_ok,
        detail: config_path
            .as_ref()
            .map(|path| path.display().to_string())
            .unwrap_or_else(|| "~/.mimo/mimo.config.json".to_string()),
    });

    #[cfg(target_os = "macos")]
    {
        if let Some(bundle) = bundle_dir.as_ref() {
            items.push(run_command_check(
                "codesign".to_string(),
                "签名校验".to_string(),
                "codesign",
                &["--verify", "--deep", "--strict", &bundle.display().to_string()],
            ));
            items.push(run_command_check(
                "spctl".to_string(),
                "Gatekeeper".to_string(),
                "spctl",
                &["--assess", "--type", "execute", &bundle.display().to_string()],
            ));
        }
    }

    items
}

#[cfg(target_os = "macos")]
fn run_command_check(
    key: String,
    label: String,
    command: &str,
    args: &[&str],
) -> SystemDiagnosticItem {
    match std::process::Command::new(command).args(args).output() {
        Ok(output) => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            let stderr = String::from_utf8_lossy(&output.stderr);
            let detail = format!("{}{}", stdout, stderr).trim().to_string();
            SystemDiagnosticItem {
                key,
                label,
                ok: output.status.success(),
                detail: if detail.is_empty() {
                    format!("{command} exit {}", output.status.code().unwrap_or(-1))
                } else {
                    detail
                },
            }
        }
        Err(err) => SystemDiagnosticItem {
            key,
            label,
            ok: false,
            detail: err.to_string(),
        },
    }
}

fn openai_base_url(base_url: &str) -> String {
    let trimmed = base_url.trim().trim_end_matches('/');
    if trimmed.is_empty() {
        return "https://api.xiaomimimo.com/v1".to_string();
    }
    if let Some(prefix) = trimmed.strip_suffix("/anthropic") {
        return format!("{prefix}/v1");
    }
    if trimmed.ends_with("/v1") {
        return trimmed.to_string();
    }
    format!("{trimmed}/v1")
}

fn anthropic_base_url(base_url: &str) -> String {
    let trimmed = base_url.trim().trim_end_matches('/');
    if trimmed.is_empty() {
        return "https://token-plan-sgp.xiaomimimo.com/anthropic".to_string();
    }
    if trimmed.ends_with("/anthropic") {
        return trimmed.to_string();
    }
    if let Some(prefix) = trimmed.strip_suffix("/v1") {
        return format!("{prefix}/anthropic");
    }
    format!("{trimmed}/anthropic")
}

fn parse_search_results(text: &str, limit: usize) -> Vec<serde_json::Value> {
    let mut results = Vec::new();
    let mut seen = HashSet::new();
    let mut lines = text.lines().peekable();

    while let Some(line) = lines.next() {
        let Some((title, url)) = parse_markdown_link(line.trim()) else {
            continue;
        };
        if !url.starts_with("http") || title.trim().is_empty() || seen.contains(&url) {
            continue;
        }
        seen.insert(url.clone());

        let mut snippet_parts = Vec::new();
        while let Some(next_line) = lines.peek().copied() {
            let trimmed = next_line.trim();
            if trimmed.is_empty() {
                lines.next();
                if !snippet_parts.is_empty() {
                    break;
                }
                continue;
            }
            if parse_markdown_link(trimmed).is_some() {
                break;
            }
            if !trimmed.starts_with("http") && !trimmed.starts_with("![") {
                snippet_parts.push(trimmed.to_string());
            }
            lines.next();
            if snippet_parts.len() >= 3 {
                break;
            }
        }

        results.push(serde_json::json!({
            "title": title,
            "url": url,
            "snippet": snippet_parts.join(" "),
        }));

        if results.len() >= limit {
            return results;
        }
    }

    parse_html_anchor_results(text, limit, &mut results, &mut seen);
    results
}

fn parse_markdown_link(line: &str) -> Option<(String, String)> {
    if line.starts_with('!') {
        return None;
    }
    let start = line.find('[')?;
    let mid = line[start..].find("](")? + start;
    let url_start = mid + 2;
    let url_end = line[url_start..].find(')')? + url_start;
    let title = line[start + 1..mid].trim().to_string();
    let url = normalize_search_url(line[url_start..url_end].trim());
    Some((title, url))
}

fn normalize_search_url(url: &str) -> String {
    let cleaned = decode_html(url).trim().to_string();
    let with_protocol = if cleaned.starts_with("//") {
        format!("https:{cleaned}")
    } else {
        cleaned
    };

    if let Some(start) = with_protocol.find("uddg=") {
        let value_start = start + 5;
        let value_end = with_protocol[value_start..]
            .find('&')
            .map(|offset| value_start + offset)
            .unwrap_or(with_protocol.len());
        if let Ok(decoded) = urlencoding::decode(&with_protocol[value_start..value_end]) {
            return decoded.to_string();
        }
    }
    with_protocol
}

fn parse_html_anchor_results(
    text: &str,
    limit: usize,
    results: &mut Vec<serde_json::Value>,
    seen: &mut HashSet<String>,
) {
    let mut rest = text;
    while results.len() < limit {
        let Some(anchor_start) = rest.find("<a") else {
            break;
        };
        let after_start = &rest[anchor_start..];
        let Some(tag_end) = after_start.find('>') else {
            break;
        };
        let tag = &after_start[..=tag_end];
        let Some(href) = extract_html_attr(tag, "href") else {
            rest = &after_start[tag_end + 1..];
            continue;
        };
        let after_tag = &after_start[tag_end + 1..];
        let lower_after_tag = after_tag.to_lowercase();
        let Some(close) = lower_after_tag.find("</a>") else {
            break;
        };
        let title = strip_html(&after_tag[..close]);
        let url = normalize_search_url(&href);
        if is_usable_search_result(&url, &title) && !seen.contains(&url) {
            seen.insert(url.clone());
            results.push(serde_json::json!({
                "title": title,
                "url": url,
                "snippet": "",
            }));
        }
        rest = &after_tag[close + 4..];
    }
}

fn extract_html_attr(tag: &str, name: &str) -> Option<String> {
    let lower = tag.to_lowercase();
    let needle = format!("{name}=");
    let attr_start = lower.find(&needle)? + needle.len();
    let bytes = tag.as_bytes();
    let quote = *bytes.get(attr_start)?;
    if quote != b'\'' && quote != b'"' {
        return None;
    }
    let value_start = attr_start + 1;
    let value_end = tag[value_start..].find(quote as char)? + value_start;
    Some(tag[value_start..value_end].to_string())
}

fn strip_html(value: &str) -> String {
    let mut out = String::new();
    let mut in_tag = false;
    for ch in value.chars() {
        match ch {
            '<' => in_tag = true,
            '>' => in_tag = false,
            _ if !in_tag => out.push(ch),
            _ => {}
        }
    }
    decode_html(&out)
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
}

fn decode_html(value: &str) -> String {
    let mut decoded = value
        .replace("&amp;", "&")
        .replace("&quot;", "\"")
        .replace("&#39;", "'")
        .replace("&lt;", "<")
        .replace("&gt;", ">");

    while let Some(start) = decoded.find("&#") {
        let Some(end_rel) = decoded[start..].find(';') else {
            break;
        };
        let end = start + end_rel;
        let entity = &decoded[start + 2..end];
        let parsed = if let Some(hex) = entity.strip_prefix('x').or_else(|| entity.strip_prefix('X')) {
            u32::from_str_radix(hex, 16).ok()
        } else {
            entity.parse::<u32>().ok()
        };
        let Some(ch) = parsed.and_then(char::from_u32) else {
            break;
        };
        decoded.replace_range(start..=end, &ch.to_string());
    }

    decoded
}

fn is_usable_search_result(url: &str, title: &str) -> bool {
    if !url.starts_with("http") || title.trim().is_empty() {
        return false;
    }
    let lower = url.to_lowercase();
    !lower.contains("duckduckgo.com/assets")
        && !lower.contains("duckduckgo.com/lite/")
        && !lower.contains("duckduckgo.com/html/")
        && !lower.contains("bing.com/search?")
        && !lower.contains("bing.com/sa/")
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            mimo_chat_completions,
            mimo_anthropic_messages,
            web_search_documents,
            system_diagnostics,
        ])
        .setup(|app| {
            // macOS: 设置窗口标题栏样式
            #[cfg(target_os = "macos")]
            {
                if let Some(window) = app.get_webview_window("main") {
                    use tauri::TitleBarStyle;
                    let _ = window.set_title_bar_style(TitleBarStyle::Overlay);
                }
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
