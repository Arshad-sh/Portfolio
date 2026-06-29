import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaLightbulb, FaCertificate, FaProjectDiagram } from "react-icons/fa";

const achievementsData = [
  {
    title: "Qualified TCS CodeVita Season 13 Round 1",
    desc: "Successfully solved programming problems in the official global coding competition hosted by Tata Consultancy Services.",
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    tag: "Coding Competition",
  },
  {
    title: "AWS Solutions Architecture Simulation",
    desc: "Completed a simulation focused on designing cloud architectures, VPC configurations, IAM policies, and serverless applications.",
    icon: <FaCertificate className="text-blue-500 text-2xl" />,
    tag: "Cloud Simulation",
  },
  {
    title: "Qualified AVISHKAR 2025",
    desc: "Recognized in the prestigious research project competition AVISHKAR, representing innovative electronics and engineering ideas.",
    icon: <FaAward className="text-emerald-500 text-2xl" />,
    tag: "Zonal Zonal Research",
  },
  {
    title: "Techathon 2.0 Innovation Foundation",
    desc: "Presented technical solutions for real-world issues, demonstrating creativity, rapid prototyping, and software engineering capabilities.",
    icon: <FaLightbulb className="text-[#F7DF1E] text-2xl" />,
    tag: "Hackathon",
  },
  {
    title: "Poster & Project Competition",
    desc: "Presented architectural diagrams and live demonstrations of project works to panels of academic and technical experts.",
    icon: <FaProjectDiagram className="text-purple-500 text-2xl" />,
    tag: "Presentation",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0B1120] relative">
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
            My <span className="text-blue-500">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/5 shadow-xl relative overflow-hidden group"
            >
              {/* Top Row with icon and tag */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-[#94A3B8] bg-white/5 border border-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;
