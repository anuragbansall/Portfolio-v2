import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import NowPlaying from "./NowPlaying";

function NavBar() {
  const { theme, toggleTheme } = useThemeContext();

  const navItems = [
    {
      path: "/",
      label: "Overview",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/work",
      label: "Projects",
    },
  ];

  return (
    <div className="sticky top-4 z-30 w-full py-6 md:py-8">
      <div className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl px-3 md:px-6 py-3 flex items-center justify-between gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] font-semibold flex items-center justify-center">
            AB
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Portfolio</p>
            <p className="text-sm md:text-base font-semibold">Anurag Bansal</p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hidden md:block px-3 md:px-5 py-2 rounded-xl text-sm md:text-base transition-all duration-200 border ${isActive ? "bg-[var(--surface-strong)] border-[var(--line)] shadow-sm" : "border-transparent hover:border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NowPlaying
            song="Naal Nachna"
            artist="Afsana Khan"
            audioSrc="/now-playing.mp3"
          />

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-1 md:ml-2 h-10 w-10 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] flex items-center justify-center text-lg hover:scale-95 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
