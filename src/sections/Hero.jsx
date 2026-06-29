import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import profilePic from "../assets/profile-pic.jpg";

const roles = ["Frontend Developer", "React Developer", "SQL Developer"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setSpeed(50);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.slice(0, currentText.length + 1));
        setSpeed(100);
      }, speed);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#0B1120]"
    >
      {/* Blurred background glow */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-4 uppercase">
            Open for Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
            Arshad Shaikh
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-6 h-10 flex items-center justify-center lg:justify-start">
            <span>I'm a&nbsp;</span>
            <span className="text-white border-r-2 border-blue-500 pr-1 animate-pulse">
              {currentText}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] font-medium leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
            Crafting responsive, user-friendly, and modern web experiences with React and JavaScript.
          </p>

          <p className="text-sm sm:text-base text-[#94A3B8]/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            I am a passionate frontend developer focused on building responsive, accessible, and interactive web applications. I enjoy turning ideas into intuitive digital experiences while continuously improving my skills in React and modern web technologies.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>

            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center gap-2 rounded-xl bg-[#111827] border border-white/10 px-6 py-3 text-sm font-semibold text-[#F8FAFC] hover:border-blue-500/30 hover:bg-[#111827]/80 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-white/5 px-6 py-3 text-sm font-semibold text-[#94A3B8] hover:text-white hover:border-white/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-5">
            <a
              href="https://github.com/Arshad-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#94A3B8] hover:text-white hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arshad8787/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#94A3B8] hover:text-white hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:arshadshaikh0564@gmail.com"
              className="text-xl text-[#94A3B8] hover:text-white hover:-translate-y-1 transition-all duration-300"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float flex items-center justify-center">
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
            
            {/* Gradient border wrapper */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-blue-400 to-transparent shadow-2xl">
              {/* Inner card container */}
              <div className="w-full h-full rounded-full bg-[#0B1120] p-1 overflow-hidden">
                <img
                  src={profilePic}
                  alt="Arshad Shaikh"
                  className="w-full h-full object-cover rounded-full filter grayscale contrast-110 hover:grayscale-0 transition-all duration-750"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;