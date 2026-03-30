import React from "react";

function IconBox({ icon, label }) {
  return (
    <div
      className="h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] flex justify-center items-center p-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] object-cover flex-shrink-0"
      title={label}
    >
      <img
        src={icon}
        alt={label}
        className="max-h-full max-w-full object-cover"
      />
    </div>
  );
}

export default IconBox;
