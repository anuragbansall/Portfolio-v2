import React, { useState } from "react";
import IconsMarquee from "../Common/IconsMarquee";
import { motion } from "framer-motion";

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
import IconsContainer from "../Common/IconsContainer";

const iconsPngs = [
  { label: "HTML", icon: html },
  { label: "CSS", icon: css },
  { label: "JavaScript", icon: js },
  { label: "React", icon: reactjs },
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
    <div className="w-full rounded-2xl border dark:border-[#373D43] border-[#EEEEEE] dark:bg-[#101215] bg-[#EAEAEC] p-4 md:p-8">
      <div className="flex flex-col-reverse md:flex-row gap-y-4">
        <div className="min-w-fit px-4 text-nowrap">
          <p className="text-zinc-500 font-semibold">CURRENTLY USING</p>
          <p className="text-[2rem] mt-2 font-semibold">Tech I ❤️</p>
        </div>

        <div className="w-[100%]">
          <IconsMarquee iconsPngs={iconsPngs} />
        </div>
      </div>

      <motion.div
        className="w-full overflow-hidden"
        initial={{ height: 0 }}
        animate={isExpanded ? { height: "auto", margin: "5rem 0 0 0" } : { height: 0 }}
      >
        <IconsContainer iconsPngs={iconsPngs} />
      </motion.div>

      <p onClick={() => setIsExpanded(!isExpanded)} className="text-center w-full text-2xl cursor-pointer font-medium text-zinc-500 my-4 select-none">{isExpanded ? "Hide Details..." : "See Details..."}</p>
    </div>
  );
}

export default MySkills;
