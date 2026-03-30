import React from "react";
import NavBar from "../Components/Common/NavBar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-full min-h-screen px-4 md:px-10 pb-10">
      <div className="pointer-events-none absolute top-24 -left-20 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div className="pointer-events-none absolute top-[28rem] right-0 h-72 w-72 rounded-full bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
