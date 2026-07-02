import React from "react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-8">

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500">
            <FaGithub className="text-2xl text-black" />
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight text-[#f0f6fc]">
              GitHub Insight
            </h1>

            <p className="text-xs text-[#8b949e]">
              Repository Analytics Dashboard
            </p>
          </div>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-[#30363d] px-4 py-2 text-[#8b949e] transition-all duration-200 hover:border-amber-400 hover:text-white"
        >
          <FaGithub className="text-lg" />
          <span className="hidden sm:block">GitHub</span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;