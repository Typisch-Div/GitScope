import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <Navbar />

      <main className="w-full">
        {children}
      </main>
    </div>
  );
}

export default Layout;