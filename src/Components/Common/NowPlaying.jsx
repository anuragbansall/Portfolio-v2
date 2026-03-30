import { useEffect, useRef, useState } from "react";
import { FiHeadphones, FiPause, FiPlay } from "react-icons/fi";

function NowPlaying({
  song = "Blinding Lights",
  artist = "The Weeknd",
  isPlaying = false,
  audioSrc = "/now-playing.mp3",
  className = "",
}) {
  const [playing, setPlaying] = useState(isPlaying);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.preload = "metadata";
    audioRef.current = audio;

    const onEnd = () => setPlaying(false);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", onEnd);
      audioRef.current = null;
    };
  }, [audioSrc]);

  useEffect(() => {
    setPlaying(isPlaying);
  }, [isPlaying]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const title = playing ? song : "Not Playing";
  const subtitle = playing ? artist : "Tap play to listen";

  return (
    <div
      className={`group relative hidden lg:flex h-9 items-center gap-2.5 rounded-full border px-3 py-5 text-sm text-[var(--text)] backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-strong)] dark:hover:border-white/25 dark:hover:bg-white/10 ${playing ? "border-[var(--accent)]/45 bg-[var(--accent-soft)] shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_10px_24px_-14px_rgba(0,0,0,0.35)] dark:border-cyan-300/35 dark:bg-cyan-950/35 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:via-sky-400/15 dark:to-emerald-400/20 dark:shadow-[0_0_0_1px_rgba(125,211,252,0.15),0_12px_30px_-12px_rgba(34,211,238,0.8)]" : "border-[var(--line)] bg-[var(--surface)]"} ${className} ${!playing ? "animate-pulse" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 text-[var(--muted)]">
        <div
          className={`relative flex h-5 w-5 items-center justify-center transition-colors duration-300 ${playing ? "text-[var(--accent)] dark:text-cyan-200" : "text-[var(--muted)]"}`}
        >
          <FiHeadphones size={14} className={playing ? "animate-pulse" : ""} />
        </div>

        <div
          className={`flex h-3 items-end gap-0.5 ${playing ? "text-[var(--accent)]/80 dark:text-cyan-200/85" : "text-[var(--muted)]"}`}
          aria-hidden="true"
        >
          <svg
            height="100%"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>
              {`
          .bar {
            fill: currentColor;
            animation: ${playing ? "bounce 1s infinite ease-in-out" : "none"};
            transform-origin: center;
          }

          .bar:nth-child(1) { animation-delay: 0s; }
          .bar:nth-child(2) { animation-delay: 0.2s; }
          .bar:nth-child(3) { animation-delay: 0.4s; }

          @keyframes bounce {
            0%, 100% { transform: scaleY(0.4); }
            50% { transform: scaleY(1); }
          }
        `}
            </style>

            {/* Bars */}
            <rect className="bar" x="5" y="5" width="8" height="30" rx="4" />
            <rect className="bar" x="20" y="5" width="8" height="30" rx="4" />
            <rect className="bar" x="35" y="10" width="8" height="20" rx="4" />
          </svg>
        </div>
      </div>

      <div className="min-w-0 leading-none">
        <p className="truncate text-[13px] font-medium text-[var(--text)]">
          {title}
        </p>
        <p className="truncate pt-1 text-[11px] text-[var(--muted)]">
          {subtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        className={`ml-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs transition-all duration-300 ${playing ? "border-[var(--accent)]/55 bg-[var(--accent-soft)] text-[var(--accent)] hover:brightness-95 dark:border-cyan-200/60 dark:bg-cyan-100/15 dark:text-cyan-100 dark:hover:bg-cyan-100/20" : "border-[var(--line)] bg-[var(--surface-strong)] text-[var(--text)] hover:bg-[var(--surface)]"}`}
        aria-label={
          playing ? "Pause now playing track" : "Play now playing track"
        }
      >
        {playing ? <FiPause /> : <FiPlay className="translate-x-[0.5px]" />}
      </button>
    </div>
  );
}

export default NowPlaying;
