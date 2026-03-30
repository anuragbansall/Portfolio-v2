import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import SocialCard from "../Common/SocialCard";

function SocialIconsContainer() {
  const socialIconsPngs = [
    {
      label: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/anuragbansall",
      color: "#0077B5",
    },
    {
      label: <IoMdMailUnread />,
      title: "Email",
      link: "mailto:anuragbansalwork@gmail.com",
      color: "#D44638",
    },
    {
      label: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/anuragbansall",
      color: "#DADADA",
    },
    {
      label: <SiHackerrank />,
      title: "HackerRank",
      link: "https://www.hackerrank.com/devanuragbansal",
      color: "#2EC866",
    },
    {
      label: <SiLeetcode />,
      title: "LeetCode",
      link: "https://leetcode.com/anuragbansall",
      color: "#F8C300",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(7.2rem,1fr))] gap-3 place-items-center">
      {socialIconsPngs.map((item, index) => (
        <SocialCard
          key={index}
          link={item.link}
          label={item.label}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default SocialIconsContainer;
