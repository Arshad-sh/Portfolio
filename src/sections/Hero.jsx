import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" style={hero}>
      <div style={container}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={left}
        >
          <h1 style={title}>
            Hi, I'm <span style={{ color: "#38bdf8" }}>Arshad</span>
          </h1>

          <h2 style={role}>Java Full Stack Developer</h2>

          <p style={desc}>
            I build scalable and responsive web applications using React, Java,
            and SQL. Passionate about solving real-world problems and creating
            user-friendly digital experiences.
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "20px" }}>
            <a href="#projects">
              <button style={btnPrimary}>View Projects</button>
            </a>

            <a href="/resume.pdf" target="_blank">
              <button style={btnSecondary}>Download Resume</button>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div style={icons}>
            <a
              href="https://github.com/Arshad-sh"
              target="_blank"
              style={icon}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/arshad8787/"
              target="_blank"
              style={icon}
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

       

      </div>
    </section>
  );
}

/* STYLES */

const hero = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, #020617, #0f172a)",
  padding: "0 10%",
};

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
};

const left = {
  maxWidth: "600px",
};

const right = {
  marginTop: "20px",
};

const title = {
  fontSize: "55px",
};

const role = {
  color: "#38bdf8",
  margin: "10px 0",
};

const desc = {
  color: "#cbd5e1",
  lineHeight: "1.6",
};

const btnPrimary = {
  padding: "12px 25px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "6px",
  marginRight: "10px",
  cursor: "pointer",
};

const btnSecondary = {
  padding: "12px 25px",
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  borderRadius: "6px",
  cursor: "pointer",
};

const icons = {
  marginTop: "20px",
  display: "flex",
  gap: "20px",
};

const icon = {
  fontSize: "24px",
  color: "white",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  background: "#0f172a",
  border: "1px solid #1e293b",
};

export default Hero;