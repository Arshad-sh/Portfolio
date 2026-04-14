import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Search App",
    desc: "Search movies using API with real-time results and responsive UI.",
    tech: "React, API",
    github: "https://github.com/Arshad-sh/movie-search",
  },
  {
    title: "Stopwatch App",
    desc: "Interactive stopwatch with start, pause, and reset functionality.",
    tech: "JavaScript",
    github: "https://github.com/Arshad-sh/StopWatch",
  },
  {
    title: "Weather App",
    desc: "Live weather updates using API with clean UI design.",
    tech: "JavaScript, API",
    github: "https://github.com/Arshad-sh/Wheather-app",
  },
  {
    title: "Simon Says Game",
    desc: "Memory-based game with increasing difficulty levels.",
    tech: "JavaScript",
    github: "https://github.com/Arshad-sh/Simon-Say-Game-",
  },
  {
    title: "Amazon Clone",
    desc: "Frontend clone of Amazon with product layout and UI design.",
    tech: "HTML, CSS",
    github: "https://github.com/Arshad-sh/amazon-clone",
  },
  {
    title: "Currency Converter",
    desc: "Convert currencies in real-time using exchange rate API.",
    tech: "JavaScript, API",
    github: "https://github.com/Arshad-sh/Currency_Converter",
  },
];

function Projects() {
  return (
    <section id="projects" style={section}>
      <h2 style={title}>Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            style={card}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(56,189,248,0.4)",
            }}
          >
            <h3>{p.title}</h3>

            <p style={desc}>{p.desc}</p>

            <p style={tech}>
              <strong>Tech:</strong> {p.tech}
            </p>

            {/* ONLY GITHUB BUTTON */}
            <a href={p.github} target="_blank">
              <button style={btn}>View Code</button>
            </a>
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
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const card = {
  padding: "25px",
  borderRadius: "12px",
  background: "#0f172a",
  border: "1px solid #1e293b",
  textAlign: "left",
};

const desc = {
  color: "#cbd5e1",
  margin: "10px 0",
};

const tech = {
  color: "#38bdf8",
  marginBottom: "15px",
};

const btn = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  background: "#38bdf8",
  cursor: "pointer",
};

export default Projects;