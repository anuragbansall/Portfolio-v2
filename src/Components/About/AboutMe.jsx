import React from "react";
import { TiDownload } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import face from "../../assets/Images/face.gif";
import face2 from "../../assets/Images/face2.gif";
import resume from "../../assets/Resume/resume.pdf";
import SocialIconsContainer from "./SocialIconsContainer";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useThemeContext } from "../../context/ThemeContext";
import { FiArrowUpRight } from "react-icons/fi";

function AboutMe() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 md:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="p-1 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[var(--surface-strong)] border border-[var(--line)] overflow-hidden shrink-0">
            <img
              src={theme === "dark" ? face2 : face}
              alt="Anurag Bansal"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              Available for opportunities
            </p>
            <h3 className="font-semibold text-3xl md:text-4xl mt-1">
              Anurag Bansal
            </h3>
            <p className="text-[var(--muted)] mt-2">
              Front-end Developer · Computer Science Student
            </p>
          </div>
        </div>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--muted)]">
          I build responsive interfaces that balance aesthetics with
          maintainable engineering. My work emphasizes crisp user flows,
          reusable components, and performance-aware frontend architecture.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4">
            <p className="text-2xl font-semibold">⚡ Fast Learner</p>
            <p className="text-sm text-[var(--muted)]">
              Quickly adapt to new tools and frameworks
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4">
            <p className="text-2xl font-semibold">🎯 User-Centric UI</p>
            <p className="text-sm text-[var(--muted)]">
              Focused on intuitive user experiences
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="https://raw.githubusercontent.com/anuragbansall/anuragbansall/output/github-contribution-grid-snake-dark.svg"
            />
            <source
              media="(prefers-color-scheme: light)"
              srcSet="https://raw.githubusercontent.com/anuragbansall/anuragbansall/output/github-contribution-grid-snake.svg"
            />
            <img
              alt="github contribution grid snake animation"
              src="https://raw.githubusercontent.com/anuragbansall/anuragbansall/output/github-contribution-grid-snake.svg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </picture>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            Resume
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => window.open(resume, "_blank")}
              className="h-12 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] font-medium flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
            >
              <TiDownload /> Download
            </button>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1y9hkEwEzqWTTLnWYSsLNThauusk-Sl7o/view?usp=sharing",
                  "_blank",
                )
              }
              className="h-12 rounded-xl bg-[var(--accent)] text-white font-medium flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
            >
              <FaEye /> Preview
            </button>
          </div>
          <a
            href="mailto:anuragbansalwork@gmail.com"
            className="mt-3 h-12 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] font-medium flex items-center justify-center gap-2"
          >
            Contact Me <FiArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          className="flex w-full items-center border border-[var(--line)] bg-[var(--surface)] p-2 rounded-2xl cursor-pointer"
          onClick={toggleTheme}
        >
          <div
            className={`h-12 w-full flex justify-center items-center text-2xl rounded-xl ${theme === "light" ? "bg-[var(--surface-strong)]" : "opacity-70"}`}
          >
            <FiSun />
          </div>
          <div
            className={`h-12 w-full flex justify-center items-center text-2xl rounded-xl ${theme === "dark" ? "bg-[var(--surface-strong)]" : "opacity-70"}`}
          >
            <BsMoonStarsFill />
          </div>
        </button>

        <SocialIconsContainer />
      </div>
    </div>
  );
}

export default AboutMe;
