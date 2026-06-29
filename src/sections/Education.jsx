import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Engineering",
    major: "Electronics & Telecommunication",
    institution: "KJ College of Engineering and Management Research",
    university: "Savitribai Phule Pune University (SPPU)",
    date: "2022 - 2026",
    details: "Currently focusing on Frontend Technologies, Object-Oriented Programming (Java), Data Structures, and SQL Databases.",
  },
];

function Education() {
  return (
    <section id="education" className="py-24 bg-[#0B1120] relative">
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
            My <span className="text-blue-500">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-blue-500/20 max-w-3xl mx-auto pl-8 flex flex-col gap-12">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Bullet point indicator */}
              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1120] border-2 border-blue-500 text-blue-500 shadow-md group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <FaGraduationCap className="text-[10px]" />
              </div>

              {/* Card wrapper */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 group-hover:border-blue-500/20 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-blue-400">
                      {item.major}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#94A3B8] bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  <p className="font-semibold text-white/90">
                    {item.institution}
                  </p>
                  <p className="text-xs sm:text-sm italic text-blue-400/80">
                    Affiliated to {item.university}
                  </p>
                  <p className="mt-2 border-t border-white/5 pt-2 text-[#94A3B8]">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
