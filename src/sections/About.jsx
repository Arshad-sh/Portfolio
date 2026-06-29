import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-lg" />,
    label: "Location",
    value: "Pune, Maharashtra",
  },
  {
    icon: <FaGraduationCap className="text-blue-500 text-lg" />,
    label: "Education",
    value: "B.E. Electronics & Telecommunication",
  },
  {
    icon: <FaUniversity className="text-blue-500 text-lg" />,
    label: "University",
    value: "SPPU",
  },
  {
    icon: <FaCalendarAlt className="text-blue-500 text-lg" />,
    label: "Graduation",
    value: "2026",
  },
];

function About() {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative">
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
            About <span className="text-blue-500">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-[#94A3B8] font-medium text-base sm:text-lg leading-relaxed"
          >
            <p>
              I am a Frontend Developer passionate about creating responsive and user-friendly web applications using <span className="text-white font-semibold">HTML</span>, <span className="text-white font-semibold">CSS</span>, <span className="text-white font-semibold">JavaScript</span>, <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Bootstrap</span>.
            </p>
            <p>
              I enjoy transforming ideas into modern digital experiences with clean code and intuitive user interfaces.
            </p>
            <p>
              Alongside frontend development, I am currently learning <span className="text-blue-400 font-semibold">Java</span> and <span className="text-blue-400 font-semibold">Spring Boot</span> while strengthening my backend fundamentals and <span className="text-blue-400 font-semibold">SQL</span> knowledge.
            </p>
            <p>
              I am looking for opportunities as a <span className="text-white font-semibold">Frontend Developer</span>, <span className="text-white font-semibold">React Developer</span>, or <span className="text-white font-semibold">SQL Developer</span> where I can contribute, learn, and grow.
            </p>
          </motion.div>

          {/* Right Side: Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cardsData.map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col gap-3 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;