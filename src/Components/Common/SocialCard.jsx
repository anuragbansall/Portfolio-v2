import React, { useState } from "react";

function SocialCard({link, label}) {

  return (
    <div
      className={`w-full dark:bg-[#101215] dark:hover:bg-[#191b1e] bg-[#EAEAEC] flex justify-center items-center border dark:border-[#373D43] border-[#EEEEEE] p-8 text-[2rem] md:text-[3rem] rounded-2xl cursor-pointer`}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {<span className="">{label}</span>}
    </div>
  );
}

export default SocialCard;
