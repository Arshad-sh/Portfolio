import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import screenshots
import focusBoosterImg from "../assets/project-mern.jpg";
import movieSearchImg from "../assets/project-cyber.jpg";
import simonSaysImg from "../assets/project-esp32.jpg";
import weatherAppImg from "../assets/project-sql.jpg";

const featuredProject = {
  name: "Focus Booster",
  desc: "A modern Pomodoro productivity application built with React that helps users improve focus through customizable work sessions, analytics, authentication, and interactive dashboards.",
  technologies: ["React", "Material UI", "Recharts", "React Router", "JavaScript", "Vite"],
  image: focusBoosterImg,
  github: "https://github.com/Arshad-sh",
  live: "https://github.com/Arshad-sh",
};

const otherProjects = [
  {
    name: "Movie Search",
    desc: "A responsive React application that integrates the OMDb API to search movies and display posters, release year, and movie details in a clean interface.",
    technologies: ["React", "Axios", "JavaScript", "CSS", "OMDb API"],
    image: movieSearchImg,
    github: "https://github.com/Arshad-sh/movie-search",
    live: "https://github.com/Arshad-sh/movie-search",
  },
  {
    name: "Simon Says Game",
    desc: "An interactive browser-based memory game built using HTML, CSS, and JavaScript that challenges users with progressively difficult sequences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: simonSaysImg,
    github: "https://github.com/Arshad-sh/Simon-Say-Game-",
    live: "https://github.com/Arshad-sh/Simon-Say-Game-",
  },
  {
    name: "Weather App",
    desc: "A responsive weather application built with HTML, CSS, Bootstrap, and JavaScript that displays current weather information through a simple and user-friendly interface.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: weatherAppImg,
    github: "https://github.com/Arshad-sh/Wheather-app",
    live: "https://github.com/Arshad-sh/Wheather-app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0B1120] relative">
      {/* Blurred background glow */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>
          <p className="mt-4 text-[#94A3B8] max-w-xl mx-auto text-base">
            A showcase of my recent frontend developer projects. Making interactions smooth and layouts accessible.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 1. FEATURED PROJECT (Focus Booster) */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#111827] via-[#111827]/90 to-blue-950/20 p-8 lg:p-12 shadow-2xl hover:border-blue-500/40 transition-colors duration-300"
          >
            {/* Visual accent background */}
            <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Image Mockup */}
              <div className="lg:col-span-7 group overflow-hidden rounded-2xl border border-white/5 shadow-xl bg-slate-950/40 aspect-video relative">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100 absolute inset-0"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>

              {/* Right Column: Details */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    Featured Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight">
                    {featuredProject.name}
                  </h3>
                </div>

                <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
                  {featuredProject.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1F2937] border border-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#374151] hover:border-white/20 transition-all cursor-pointer"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* 2. OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherProjects.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col rounded-3xl border border-white/5 shadow-xl hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group overflow-hidden"
            >
              {/* Image preview */}
              <div className="overflow-hidden border-b border-white/5 relative aspect-video bg-slate-950/40">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100 absolute inset-0"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>

              {/* Card info */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors">
                  {p.name}
                </h3>
                
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-grow">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 py-2">
                  {p.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/20 px-4 py-2.5 text-xs font-semibold text-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] border border-white/10 px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] hover:border-white/20 transition-all cursor-pointer"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects link */}
        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Arshad-sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            <span>View All Projects</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}

export default Projects;