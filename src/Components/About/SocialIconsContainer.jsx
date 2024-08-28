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
        link: 'https://www.linkedin.com/in/anuragbansall',
        color: "#0077B5"
        },
        {
        label: <IoMdMailUnread />        ,
        link: 'mailto:anuragbansalwork@gmail.com',
        color: "#D44638"
        },
        {
        label: <FaGithub />,
        link: 'https://github.com/anuragbansall',
        color: "#DADADA"
        },
        {
        label: <SiHackerrank />,
        link: 'https://www.hackerrank.com/devanuragbansal',
        color: "#2EC866"
        },
        {
        label: <SiLeetcode />,
        link: 'https://leetcode.com/anuragbansall',
        color: "#F8C300"
        },
    ]

  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-4">
      {socialIconsPngs.map((item, index) => (
        <SocialCard
          key={index}
          link={item.link}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default SocialIconsContainer;
