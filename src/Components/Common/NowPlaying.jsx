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
  const containerTone = playing
    ? "border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-sky-400/15 to-emerald-400/20 shadow-[0_0_0_1px_rgba(125,211,252,0.15),0_12px_30px_-12px_rgba(34,211,238,0.8)]"
    : "border-white/10 bg-white/5";

  return (
    <div
      className={`group relative hidden lg:flex h-9 items-center gap-2.5 rounded-full border px-3 py-5 text-sm backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10 ${containerTone} ${className} ${!playing ? "animate-pulse" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 text-gray-300">
        <div
          className={`relative flex h-5 w-5 items-center justify-center transition-colors duration-300 ${playing ? "text-cyan-200" : "text-white/80"}`}
        >
          <FiHeadphones size={14} className={playing ? "animate-pulse" : ""} />
        </div>

        <div className="flex h-3 items-end gap-0.5" aria-hidden="true">
          <svg
            height="100%"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>
              {`
          .bar {
            fill: #9ca3af;
            animation: ${playing ? "bounce 1s infinite ease-in-out" : "none"};
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
        <p className="truncate text-[13px] font-medium text-white">{title}</p>
        <p className="truncate pt-1 text-[11px] text-gray-300/75">{subtitle}</p>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        className={`ml-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs transition-all duration-300 ${playing ? "border-cyan-200/60 bg-cyan-100/15 text-cyan-100 hover:bg-cyan-100/20" : "border-white/20 bg-white/5 text-white/90 hover:bg-white/15"}`}
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
