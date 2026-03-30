import React from "react";
import About from "../Components/About/About";
import WorkContainer from "../Components/Work/WorkContainer";

function All() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 pb-10">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-xl p-6 md:p-10">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <p className="relative text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
          Full-Stack Engineer Portfolio
        </p>
        <h1 className="relative mt-4 text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          Building scalable, end-to-end web products that deliver real business
          value.
        </h1>
        <p className="relative mt-5 max-w-3xl text-base md:text-lg text-[var(--muted)]">
          I design and develop complete applications—from intuitive front-end
          interfaces to robust back-end systems. My work emphasizes clean
          architecture, performance, and production-ready solutions.
        </p>
      </section>

      <About />
      <WorkContainer />
    </div>
  );
}

export default All;
