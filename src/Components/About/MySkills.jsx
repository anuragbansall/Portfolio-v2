import React, { useState } from "react";
import IconsMarquee from "../Common/IconsMarquee";
import { motion } from "framer-motion";
import IconsContainer from "../Common/IconsContainer";

import cpp from "../../assets/Languages-Icons/cpp.png";
import css from "../../assets/Languages-Icons/css.png";
import firebase from "../../assets/Languages-Icons/firebase.png";
import github from "../../assets/Languages-Icons/github.png";
import git from "../../assets/Languages-Icons/git.png";
import html from "../../assets/Languages-Icons/html.png";
import js from "../../assets/Languages-Icons/js.png";
import reactjs from "../../assets/Languages-Icons/reactjs.png";
import sql from "../../assets/Languages-Icons/sql.png";
import tailwindcss from "../../assets/Languages-Icons/tailwindcss.png";
import framermotion from "../../assets/Languages-Icons/framermotion.png";
import python from "../../assets/Languages-Icons/python.png";
import nodejs from "../../assets/Languages-Icons/node-js.png";
import expressjs from "../../assets/Languages-Icons/express-js.png";

const iconsPngs = [
  { label: "HTML", icon: html },
  { label: "CSS", icon: css },
  { label: "JavaScript", icon: js },
  { label: "React", icon: reactjs },
  { label: "Node.js", icon: nodejs },
  { label: "Express.js", icon: expressjs },
  { label: "Tailwind CSS", icon: tailwindcss },
  { label: "Firebase", icon: firebase },
  { label: "SQL", icon: sql },
  { label: "C++", icon: cpp },
  { label: "Github", icon: github },
  { label: "Git", icon: git },
  { label: "Python", icon: python },
  { label: "Framer Motion", icon: framermotion },
];

function MySkills() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-5 md:p-8">
      <div className="flex flex-col-reverse md:flex-row gap-y-4 md:items-center md:justify-between">
        <div className="min-w-fit px-2">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            Currently Using
          </p>
          <p className="text-2xl md:text-3xl mt-2 font-semibold">
            Core Tech Stack
          </p>
        </div>

        <div className="w-full md:max-w-[60%]">
          <IconsMarquee iconsPngs={iconsPngs} />
        </div>
      </div>

      <motion.div
        className="w-full overflow-hidden"
        initial={{ height: 0 }}
        animate={
          isExpanded
            ? { height: "auto", margin: "2.5rem 0 0 0" }
            : { height: 0 }
        }
      >
        <IconsContainer iconsPngs={iconsPngs} />
      </motion.div>

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-12 text-center w-full h-12 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-base md:text-lg cursor-pointer font-medium text-[var(--muted)] hover:text-[var(--text)]"
      >
        {isExpanded ? "Hide Full Skills" : "Explore Full Skills"}
      </button>
    </div>
  );
}

export default MySkills;
