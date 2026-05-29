import { useEffect, useMemo, useState } from "react";
import { Icon } from "animal-island-ui";
import "./GeneratedAudioCard.css";

interface GeneratedAudioCardProps {
  url: string;
  fileName: string;
  mimeType?: string;
  className?: string;
  compact?: boolean;
  title?: string;
}

export function GeneratedAudioCard({
  url,
  fileName,
  mimeType = "audio/wav",
  className = "",
  compact = false,
  title = "音频已生成",
}: GeneratedAudioCardProps) {
  const [playbackError, setPlaybackError] = useState("");
  const normalizedAudio = useMemo(
    () => normalizeAudioSource(url, mimeType, fileName),
    [url, mimeType, fileName],
  );
  const [playbackUrl, setPlaybackUrl] = useState(normalizedAudio.url);
  const [downloadUrl, setDownloadUrl] = useState(normalizedAudio.url);
  const [downloadName, setDownloadName] = useState(normalizedAudio.fileName);
  const [audioType, setAudioType] = useState(normalizedAudio.mimeType);
  const [supportNote, setSupportNote] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let objectUrl = "";
    setPlaybackError("");
    setSupportNote("");
    setIsPlaying(false);
    setAudioType(normalizedAudio.mimeType);
    setDownloadName(normalizedAudio.fileName);

    if (!normalizedAudio.bytes) {
      setPlaybackUrl(normalizedAudio.url);
      setDownloadUrl(normalizedAudio.url);
      return;
    }

    const audioBuffer = bytesToArrayBuffer(normalizedAudio.bytes);
    const blob = new Blob([audioBuffer], { type: normalizedAudio.mimeType });
    objectUrl = URL.createObjectURL(blob);
    setPlaybackUrl(objectUrl);
    setDownloadUrl(objectUrl);

    const audio = document.createElement("audio");
    const canPlay = audio.canPlayType(normalizedAudio.mimeType);
    if (!canPlay) {
      setSupportNote(`当前 WebView 未声明支持 ${normalizedAudio.mimeType}，仍会尝试播放。`);
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [normalizedAudio]);

  const classes = [
    "generated-audio-card",
    compact && "generated-audio-card--compact",
    isPlaying && "generated-audio-card--playing",
    playbackError && "generated-audio-card--fallback",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className="generated-audio-icon" aria-hidden="true">
        <span className="generated-audio-icon-signal" />
        <Icon name="icon-helicopter" size={compact ? 16 : 19} bounce={!playbackError} />
      </div>

      <div className="generated-audio-main">
        <div className="generated-audio-head">
          <div>
            <div className="generated-audio-title">{title}</div>
            <div className="generated-audio-meta">
              <span>{audioType}</span>
              <span>{downloadName}</span>
              <span>{isPlaying ? "播放中" : normalizedAudio.durationHint}</span>
            </div>
          </div>
          <a className="generated-audio-download" href={downloadUrl} download={downloadName}>
            下载
          </a>
        </div>

        {!playbackError ? (
          <audio
            className="generated-audio-player"
            controls
            src={playbackUrl}
            preload="metadata"
            onLoadedData={() => setPlaybackError("")}
            onCanPlay={() => setPlaybackError("")}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={() => {
              setPlaybackError(`当前系统播放器无法解码 ${audioType}`);
              setIsPlaying(false);
            }}
          >
            <source src={playbackUrl} type={audioType} />
          </audio>
        ) : (
          <div className="generated-audio-fallback" role="status">
            <span>{playbackError}</span>
            <span>文件已完整生成，请下载后用系统播放器打开。</span>
          </div>
        )}

        {supportNote && !playbackError && (
          <div className="generated-audio-note" role="status">{supportNote}</div>
        )}

        <div className={`generated-audio-wave${isPlaying ? " generated-audio-wave--active" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

type NormalizedAudioSource = {
  url: string;
  bytes: Uint8Array | null;
  mimeType: string;
  fileName: string;
  durationHint: string;
};

function normalizeAudioMimeType(value: string): string {
  const lower = value.toLowerCase();
  if (lower === "audio/l16" || lower === "audio/pcm" || lower === "audio/x-pcm") {
    return "audio/wav";
  }
  if (lower === "audio/mp3" || lower === "audio/mpeg3" || lower === "audio/x-mpeg-3") {
    return "audio/mpeg";
  }
  if (lower === "audio/x-wav" || lower === "audio/wave" || lower === "audio/vnd.wave") {
    return "audio/wav";
  }
  return lower || "audio/wav";
}

function normalizeAudioSource(url: string, mimeType: string, fileName: string): NormalizedAudioSource {
  const parsed = parseDataUrl(url);
  if (!parsed) {
    const safeMime = normalizeAudioMimeType(mimeType);
    return {
      url,
      bytes: null,
      mimeType: safeMime,
      fileName: ensureFileExtension(fileName, extensionFromMime(safeMime)),
      durationHint: "可下载",
    };
  }

  const detected = detectAudioSourceFormat(parsed.bytes, parsed.mimeType || mimeType);
  const bytes = detected.fileExtension === "pcm"
    ? createWavFromPcm16(parsed.bytes, 24000, 1)
    : parsed.bytes;
  const finalMimeType = detected.fileExtension === "pcm" ? "audio/wav" : detected.mimeType;
  const finalExtension = detected.fileExtension === "pcm" ? "wav" : detected.fileExtension;
  const dataUrl = `data:${finalMimeType};base64,${bytesToBase64(bytes)}`;

  return {
    url: dataUrl,
    bytes,
    mimeType: finalMimeType,
    fileName: ensureFileExtension(fileName, finalExtension),
    durationHint: formatAudioBytes(bytes.length),
  };
}

function parseDataUrl(value: string): { mimeType: string; bytes: Uint8Array } | null {
  const match = value.match(/^data:([^;,]+)?;base64,([\s\S]+)$/i);
  if (!match) return null;
  return {
    mimeType: normalizeAudioMimeType(match[1] || ""),
    bytes: base64ToBytes(match[2]),
  };
}

function detectAudioSourceFormat(
  bytes: Uint8Array,
  mimeHint: string,
): { mimeType: string; fileExtension: string } {
  const ascii = String.fromCharCode(...bytes.slice(0, 12));
  if (ascii.startsWith("RIFF") && ascii.includes("WAVE")) {
    return { mimeType: "audio/wav", fileExtension: "wav" };
  }
  if (ascii.startsWith("ID3") || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) {
    return { mimeType: "audio/mpeg", fileExtension: "mp3" };
  }
  if (ascii.startsWith("OggS")) {
    return { mimeType: "audio/ogg", fileExtension: "ogg" };
  }

  const normalized = normalizeAudioMimeType(mimeHint);
  if (normalized === "audio/wav") return { mimeType: "audio/wav", fileExtension: "wav" };
  if (normalized === "audio/mpeg") return { mimeType: "audio/mpeg", fileExtension: "mp3" };
  if (normalized === "audio/ogg") return { mimeType: "audio/ogg", fileExtension: "ogg" };
  return { mimeType: "audio/L16", fileExtension: "pcm" };
}

function base64ToBytes(value: string): Uint8Array {
  try {
    const binary = atob(value.replace(/\s+/g, ""));
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch {
    return new Uint8Array();
  }
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(i, i + chunkSize));
  }
  return btoa(binary);
}

function bytesToArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

function createWavFromPcm16(pcmBytes: Uint8Array, sampleRate: number, channels: number): Uint8Array {
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = pcmBytes.length;
  const wav = new Uint8Array(44 + dataSize);
  const view = new DataView(wav.buffer);

  writeAscii(wav, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeAscii(wav, 8, "WAVE");
  writeAscii(wav, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeAscii(wav, 36, "data");
  view.setUint32(40, dataSize, true);
  wav.set(pcmBytes, 44);
  return wav;
}

function writeAscii(target: Uint8Array, offset: number, value: string): void {
  for (let i = 0; i < value.length; i += 1) {
    target[offset + i] = value.charCodeAt(i);
  }
}

function ensureFileExtension(name: string, extension: string): string {
  const safeExtension = extension.replace(/^\./, "") || "wav";
  const baseName = name.trim() || "mimodex-audio";
  return baseName.replace(/\.[a-z0-9]{2,5}$/i, `.${safeExtension}`);
}

function extensionFromMime(mimeType: string): string {
  if (mimeType === "audio/mpeg") return "mp3";
  if (mimeType === "audio/ogg") return "ogg";
  return "wav";
}

function formatAudioBytes(bytes: number): string {
  if (!bytes) return "已生成";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
