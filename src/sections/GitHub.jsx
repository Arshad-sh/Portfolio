import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { FaGitAlt, FaStar, FaCodeBranch, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

const fallbackRepos = [
  {
    name: "movie-search",
    description: "A responsive React application integrating the OMDb API to search and view movies.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/movie-search",
  },
  {
    name: "Wheather-app",
    description: "A simple and responsive weather application using live weather APIs and Bootstrap.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/Wheather-app",
  },
  {
    name: "Simon-Say-Game-",
    description: "An interactive browser memory game challenging users with sequence patterns.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/Simon-Say-Game-",
  },
  {
    name: "StopWatch",
    description: "A clean interface stopwatch built with core JavaScript features.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/StopWatch",
  },
  {
    name: "amazon-clone",
    description: "Frontend clone of the Amazon storefront displaying products and layout.",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/amazon-clone",
  },
  {
    name: "Currency_Converter",
    description: "A browser utility converting currencies via live conversion rates APIs.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/Arshad-sh/Currency_Converter",
  },
];

function GitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Arshad-sh/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Using fallback repositories:", err);
        setRepos(fallbackRepos);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="py-24 bg-[#0B1120] relative">
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
            GitHub <span className="text-blue-500">Activity</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 1. CONTRIBUTION GRAPH */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl mb-12 flex flex-col items-center"
        >
          <h3 className="text-lg font-bold text-white mb-6 w-full text-left flex items-center gap-2">
            <FaGitAlt className="text-blue-500 text-xl" />
            <span>Contribution Calendar</span>
          </h3>
          
          <div className="w-full overflow-x-auto flex justify-center py-2 text-xs">
            <GitHubCalendar
              username="Arshad-sh"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              colorScheme="dark"
              theme={{
                dark: ["#1e293b", "#1e3a8a", "#2563eb", "#3b82f6", "#60a5fa"],
              }}
            />
          </div>
        </motion.div> */}

        {/* 2. STATS & TOP LANGUAGES CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Stats Card */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center justify-center min-h-[220px]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=Arshad-sh&show_icons=true&theme=tokyonight&bg_color=111827&title_color=3b82f6&icon_color=60a5fa&text_color=94a3b8&border_color=1f2937"
              alt="GitHub Stats"
              className="w-full max-w-md h-auto filter brightness-95"
              loading="lazy"
            />
          </motion.div> */}

          {/* Top Languages Card */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center justify-center min-h-[220px]"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arshad-sh&layout=compact&theme=tokyonight&bg_color=111827&title_color=3b82f6&icon_color=60a5fa&text_color=94a3b8&border_color=1f2937"
              alt="Top Languages"
              className="w-full max-w-md h-auto filter brightness-95"
              loading="lazy"
            />
          </motion.div> */}

        </div>

        {/* 3. LATEST REPOSITORIES */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <FaFolder className="text-blue-500 text-lg" />
            <span>Latest Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="glass-card p-6 rounded-2xl border border-white/5 animate-pulse h-[160px]"
                    >
                      <div className="h-4 bg-white/10 rounded w-2/3 mb-4" />
                      <div className="h-3 bg-white/5 rounded w-full mb-2" />
                      <div className="h-3 bg-white/5 rounded w-5/6" />
                    </div>
                  ))
              : repos.map((repo, idx) => (
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id || idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/5 shadow-lg group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-sm font-bold text-white group-hover:text-blue-500 transition-colors truncate">
                          {repo.name}
                        </span>
                        <FaExternalLinkAlt className="text-[10px] text-[#94A3B8] group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                        {repo.description || "No description provided."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-6 text-xs text-[#94A3B8]">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FaStar className="text-[10px] text-yellow-500" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCodeBranch className="text-[10px]" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default GitHub;
