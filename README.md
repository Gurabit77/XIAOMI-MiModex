# MiModex

MiModex 是一款面向 MiMo Code 和小米 MiMo 平台能力的桌面控制器。它把命令行里的 AI 编程助手、联网搜索、多模态理解、语音合成等能力，整理成一个更适合日常使用的桌面工作台：支持本地配置、权限控制、运行诊断、能力测试，以及内置引擎的跨平台发布包。

MiModex 基于 Tauri、React、TypeScript、Rust 构建，并内置了一份 Animal Island UI 组件包。

## 功能亮点

- 桌面优先的 MiMo Code 工作流：支持对话、任务上下文、命令快捷入口、工具输出、运行时授权提示。
- Release 包内置 MiMo Code Engine。用户下载 MiModex 后即可使用，不需要额外安装 MiMo Code CLI。
- 桌面对话默认使用 ACP transport；开发环境或旧版本引擎不支持 ACP 时，会回退到 legacy `stream-json` stdio 桥接。
- 真实 MiMo Web Search 工作流：先让 MiMo 规划检索词，再读取来源材料，最后把来源交回 MiMo 汇总回答。
- 多模态工作区：支持通过 URL 或 Base64 输入图片、音频、视频素材。
- TTS 语音工作区：支持语音合成、风格预设、内置音色，以及 mp3/wav 样本音频校验。
- 本地设置和诊断：检查 API 连接、内置引擎、系统环境、能力可用性。
- GitHub Actions 发布流程已支持 Apple Silicon Mac、Intel Mac、Windows x64。

## 界面预览

### MiMo Code 对话工作流

![MiModex MiMo Code 对话工作流](docs/images/mimodex-chat-workflow.png)

### 执行前授权

![MiModex 执行前授权面板](docs/images/mimodex-permission-panel.png)

### 岛屿应用入口

![MiModex 岛屿应用入口](docs/images/mimodex-app-hub.png)

## 平台支持

| 平台 | Release target | 状态 |
| --- | --- | --- |
| macOS Apple Silicon | `aarch64-apple-darwin` | 已支持 |
| macOS Intel | `x86_64-apple-darwin` | 已通过发布 workflow 支持 |
| Windows x64 | `x86_64-pc-windows-msvc` | 已通过发布 workflow 支持 |
| Linux | 暂未启用 | 第一版公开发布暂不包含 |

Release 包会包含对应平台的 MiModex Engine sidecar。用户仍然需要填写自己的 MiMo API Key 才能使用云端模型能力。

## 下载和使用

从 GitHub Releases 下载与你系统匹配的包：

- Apple Silicon Mac：`MiModex-macOS-Apple-Silicon.zip`
- Intel Mac：`MiModex-macOS-Intel.zip`
- Windows x64：MiModex Windows 安装程序 `.exe`

启动 MiModex 后，在设置页填写 MiMo API 配置。配置会保存在用户本机，不需要、也不应该提交到代码仓库。

## 配置方式

MiModex 的本地运行配置默认保存在：

```text
~/.mimo/mimo.config.json
```

配置示例：

```json
{
  "apiKey": "<YOUR_MIMO_API_KEY>",
  "baseUrl": "https://token-plan-sgp.xiaomimimo.com/anthropic"
}
```

常见 Base URL：

- Token Plan / Anthropic 兼容端点：`https://token-plan-sgp.xiaomimimo.com/anthropic`
- OpenAI 兼容端点：通常以 `/v1` 结尾

请不要把真实 API Key、本地配置、日志、生成音频、截图、打包产物或依赖目录提交到仓库。

## 核心工作流

### MiMo Code

编程工作区通过 ACP 连接内置 MiMo Code Engine，支持模型选择、推理强度、权限模式、命令模板、工具进度和流式回答。如果开发环境中的引擎不支持 ACP，MiModex 会自动回退到 legacy `stream-json` 桥接。

### 联网搜索

MiModex 的 Web Search 不是“在提示词里假装搜索”。它会执行一个结构化闭环：

1. 整理用户问题和搜索策略。
2. 让 MiMo 规划检索词。
3. 读取并整理来源材料。
4. 把来源交回 MiMo，生成最终回答。

MiMo Web Search 需要账号侧具备对应的平台能力或插件权限。

### 多模态理解

多模态工作区支持图片、音频、视频素材，输入形式可以是 URL 或 Base64。界面会围绕 MiMo 多模态模型的约束展示进度、错误和用量信息。

### TTS 语音工坊

TTS 工作区会调用 MiMo 语音模型生成音频，支持模型选择、风格预设、内置音色，以及 mp3/wav 样本音频校验。

## 开发环境要求

- Node.js 20+
- npm 10+
- Rust toolchain 和 Cargo
- Bun：当需要本地构建不存在的 sidecar 目标时使用

安装依赖：

```bash
npm install
```

启动浏览器开发预览：

```bash
npm run dev
```

启动 Tauri 桌面开发环境：

```bash
npm run tauri:dev
```

构建前端：

```bash
npm run build
```

执行 Rust 检查：

```bash
cd src-tauri
cargo check
```

## 桌面端打包

构建并签名 macOS App：

```bash
npm run tauri:build:signed
```

在 Windows 上构建 Windows 安装包：

```bash
npm run tauri:build:windows
```

macOS App 产物位置：

```text
src-tauri/target/release/bundle/macos/MiModex.app
```

Windows 安装包产物位置：

```text
src-tauri/target/release/bundle/nsis/
```

## 内置引擎 Sidecar

MiModex 使用一个名为 `mimo-code-engine` 的 Tauri sidecar。`scripts/ensure-sidecar.mjs` 会为当前发布目标准备正确的二进制文件。

当前支持的 sidecar target：

- `aarch64-apple-darwin`
- `x86_64-apple-darwin`
- `x86_64-pc-windows-msvc`

准备当前平台 sidecar：

```bash
npm run prepare:sidecar
```

准备所有已配置 sidecar target：

```bash
node scripts/ensure-sidecar.mjs --all
```

准备指定 target：

```bash
node scripts/ensure-sidecar.mjs --target=x86_64-apple-darwin
```

脚本会优先复用已有 sidecar；如果不存在，会尝试用 Bun 从 `src-tauri/resources/mimo-code/dist/cli-bun.js` 构建；如果设置了 `MIMODEX_SIDECAR_BASE_URL`，也可以从指定地址下载预构建 sidecar。

## 发布流程

GitHub Actions workflow 位于：

```text
.github/workflows/release.yml
```

它会构建以下发布产物：

- macOS Apple Silicon
- macOS Intel
- Windows x64

发布新版本时，可以推送版本 tag，例如：

```bash
git tag v1.0.0
git push origin v1.0.0
```

workflow 会把 App 包和对应平台 sidecar 二进制上传为 Release assets。也可以通过 `workflow_dispatch` 手动触发一次测试构建。

## 常用脚本

```bash
npm run doctor
npm run prepare:sidecar
npm run macos:launch-direct
npm run macos:repair-launchservices
npm run e2e:capabilities
```

`npm run doctor` 用于检查本机桌面运行环境。  
`npm run e2e:capabilities` 会使用本地配置进行真实 API 能力测试，并把临时输出写入 `.e2e-output/`。该目录已被 git 忽略。

## 项目结构

```text
src/                         React 前端
src-tauri/                   Tauri 后端、App 配置、Rust 命令、sidecar 资源
src-tauri/bin/               内置引擎 sidecar 存放位置
src-tauri/resources/         MiMo Code runtime 资源
packages/animal-island-ui/   前端使用的 vendored UI 组件包
scripts/                     构建、发布、诊断、签名、sidecar 辅助脚本
.github/workflows/           GitHub Actions 发布构建
```

## 隐私和安全

MiModex 会把用户配置保存在本机。API Key 应该只存在于用户本地的 `~/.mimo/mimo.config.json` 或 App 设置中，不能进入源码仓库。

公开发布仓库前，请确认仓库中不包含：

- API Key 或 token
- 个人电脑路径
- 本地配置文件
- 日志或诊断输出
- 生成音频、截图或测试输出
- `node_modules/`、`dist/`、`src-tauri/target/` 或打包后的 App

安全报告和负责任披露说明见 `SECURITY.md`。

## 故障排查

如果 macOS App 无法正常打开，可以尝试：

```bash
npm run doctor
npm run macos:repair-launchservices
```

macOS 直接启动兜底：

```bash
npm run macos:launch-direct
```

如果当前平台缺少内置引擎，请重新准备 sidecar：

```bash
npm run prepare:sidecar
```

如果某项 API 能力失败，请检查：

- API Key 是否有效。
- Base URL 是否匹配当前 key 类型和端点类型。
- 当前选择的 MiMo 模型是否支持该能力。
- 账号是否已开通 Web Search、TTS 或多模态等能力。

## 贡献

欢迎提交 Issue 和 Pull Request。请保持改动聚焦，不要提交生成产物；如果修改了桌面打包、API 能力流程或权限处理，请在 PR 中说明验证方式。

## 致谢

- 感谢 [Animal Island UI](https://guokaigdg.github.io/animal-island-ui/#/) 提供温暖、细腻的界面组件和视觉灵感。
- 感谢小米 MIMO 模型开发团队提供底层模型能力与平台支持。

## License

MIT
