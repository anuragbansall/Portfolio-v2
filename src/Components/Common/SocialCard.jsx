import React from "react";

function SocialCard({ link, label, title }) {
  return (
    <div
      role="button"
      className="w-full h-24 bg-[var(--surface)] hover:bg-[var(--surface-strong)] flex flex-col justify-center items-center border border-[var(--line)] p-3 text-2xl rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-1"
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <span>{label}</span>
      <span className="text-xs mt-1 text-[var(--muted)]">{title}</span>
    </div>
  );
}

export default SocialCard;
