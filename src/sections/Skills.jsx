import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaNetworkWired,
  FaGlobe,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
    ],
  },
  {
    title: "Backend (Learning)",
    items: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#00758F]" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-[#F0F6FC]" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    ],
  },
];

const learningItems = [
  {
    name: "Java",
    desc: "Strengthening core programming concepts, oops, and multithreading.",
    icon: <FaJava className="text-[#007396] text-3xl" />,
  },
  {
    name: "Spring Boot",
    desc: "Building production-grade web APIs and microservices architectures.",
    icon: <SiSpringboot className="text-[#6DB33F] text-3xl" />,
  },
  {
    name: "REST APIs",
    desc: "Designing and consuming secure, fast, and scalable HTTP endpoints.",
    icon: <FaNetworkWired className="text-[#60A5FA] text-3xl" />,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0B1120] relative">
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
            My <span className="text-blue-500">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-white/10 transition-all duration-300 group cursor-default"
                  >
                    <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#E2E8F0]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Sub-Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-white"
            >
              Currently <span className="text-blue-500">Learning</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-blue-500/30"
              >
                {/* Background glow overlay */}
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;