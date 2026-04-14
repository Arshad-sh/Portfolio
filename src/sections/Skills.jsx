import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiJavascript } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Other Skills",
    items: [
      { name: "Problem Solving", icon: "💡" },
      { name: "Git & GitHub", icon: "🔗" },
      { name: "Responsive Design", icon: "📱" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" style={section}>
      <h2 style={title}>Skills</h2>

      <div style={grid}>
        {skills.map((category, i) => (
          <motion.div
            key={i}
            style={card}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(56,189,248,0.4)",
            }}
          >
            <h3 style={categoryTitle}>{category.title}</h3>

            {category.items.map((skill, index) => (
              <div key={index} style={item}>
                <span style={icon}>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "120px 10%",
  textAlign: "center",
};

const title = {
  fontSize: "40px",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const card = {
  padding: "25px",
  borderRadius: "12px",
  background: "#0f172a",
  border: "1px solid #1e293b",
};

const categoryTitle = {
  marginBottom: "15px",
  color: "#38bdf8",
};

const item = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  justifyContent: "center",
};

const icon = {
  fontSize: "20px",
};

export default Skills;