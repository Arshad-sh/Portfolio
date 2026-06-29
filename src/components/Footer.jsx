import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0B1120] py-12 text-[#94A3B8]">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="text-center md:text-left">
          <span
            onClick={() => scroll.scrollToTop({ duration: 500 })}
            className="text-lg font-bold text-white tracking-wider cursor-pointer hover:text-blue-500 transition-colors"
          >
            AS<span className="text-blue-500">.</span>
          </span>
          <p className="mt-2 text-sm text-[#94A3B8]">
            © {currentYear} Arshad Shaikh. All Rights Reserved.
          </p>
        </div>

        {/* Center / Right - Developer info */}
        <div className="text-center">
          <p className="text-sm">
            Designed & Developed by{" "}
            <span className="font-semibold text-white hover:text-blue-500 transition-colors">
              Arshad Shaikh
            </span>
          </p>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Arshad-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-[#111827] text-[#94A3B8] hover:text-blue-500 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arshad8787/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-[#111827] text-[#94A3B8] hover:text-blue-500 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:arshadshaikh0564@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-[#111827] text-[#94A3B8] hover:text-blue-500 hover:border-blue-500/30 transition-all hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;