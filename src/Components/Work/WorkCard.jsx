import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function WorkCard({
  image,
  link,
  title,
  tags,
  description,
  index,
  featured = false,
}) {
  return (
    <div className="relative z-1 h-full w-full overflow-hidden mb-5 break-inside-avoid">
      <div
        className={`h-full overflow-hidden w-full border border-[var(--line)] bg-[var(--surface)] px-4 md:px-6 py-4 md:py-5 rounded-3xl cursor-pointer duration-200 group relative hover:-translate-y-1 ${featured ? "shadow-[0_20px_40px_rgba(0,0,0,0.08)]" : ""}`}
        onClick={() => window.open(link, "_blank")}
      >
        <div className="w-full overflow-hidden flex justify-center items-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] min-h-52">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[20rem] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Image_not_available.png";
            }}
          />
        </div>

        <div className="mt-5">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              {title}
            </h2>
            <span className="h-9 w-9 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] shrink-0 flex items-center justify-center text-lg">
              <FiArrowUpRight />
            </span>
          </div>

          <p className="mt-3 text-[var(--muted)] leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((item, index) => (
              <span
                key={index}
                className="bg-[var(--surface-strong)] text-[var(--muted)] border border-[var(--line)] text-sm font-medium px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Lighting Effect */}
          <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gradient-to-t from-[var(--accent-soft)] dark:from-[var(--line)] to-transparent -z-10 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
