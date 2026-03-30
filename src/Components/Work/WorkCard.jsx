import React from "react";
import { motion } from "framer-motion";
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
    <div className="relative h-full w-full overflow-hidden mb-5 break-inside-avoid">
      <motion.div
        className={`h-full w-full border border-[var(--line)] bg-[var(--surface)] px-4 md:px-6 py-4 md:py-5 rounded-3xl cursor-pointer duration-200 group relative hover:-translate-y-1 ${featured ? "shadow-[0_20px_40px_rgba(0,0,0,0.08)]" : ""}`}
        onClick={() => window.open(link, "_blank")}
        initial={{ x: index % 2 ? "50%" : "-50%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full overflow-hidden flex justify-center items-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] min-h-52">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[20rem] object-cover group-hover:scale-[1.02] transition-transform duration-500"
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

          <div className="absolute left-1/2 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent w-0 group-hover:w-full transform -translate-x-1/2 transition-all duration-300" />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkCard;
