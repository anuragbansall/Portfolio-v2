import React from "react";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";

function About() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
            About
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mt-2">
            Engineer mindset with design execution
          </h2>
        </div>
        <p className="hidden md:block text-sm md:text-base text-[var(--muted)] max-w-md text-right">
          Focused on front-end systems, scalable components, and practical
          product thinking.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <AboutMe />
        <MySkills />
      </div>
    </div>
  );
}

export default About;
