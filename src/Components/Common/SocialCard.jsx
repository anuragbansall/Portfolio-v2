import React, { useState } from "react";

function SocialCard({link, label}) {

  return (
    <div
      className={`bg-[#101215] hover:bg-[#191b1e] flex justify-center items-center border border-[#373D43] p-8 text-[2rem] md:text-[3rem] rounded-2xl cursor-pointer`}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {<span className="">{label}</span>}
    </div>
  );
}

export default SocialCard;
