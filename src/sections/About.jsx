import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" style={section}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={container}
      >
        <h2 style={title}>About Me</h2>

        <p style={desc}>
          I am a dedicated <span style={highlight}>Java Full Stack Developer</span> 
          with a strong foundation in building scalable and responsive web 
          applications. I specialize in technologies like <span style={highlight}>React, Java, and SQL</span>.
        </p>

        <p style={desc}>
          I enjoy solving real-world problems, writing clean and efficient code, 
          and continuously improving my skills. I am passionate about creating 
          user-friendly interfaces and delivering high-quality software solutions.
        </p>

        <p style={desc}>
          I am currently looking for an opportunity where I can contribute my 
          skills, grow as a developer, and add value to a professional team.
        </p>

        {/* HIGHLIGHT BOX */}
        <div style={box}>
          <h3>🚀 What I Bring</h3>
          <ul style={list}>
            <li>✔ Strong problem-solving skills</li>
            <li>✔ Clean and maintainable code</li>
            <li>✔ Experience with full stack development</li>
            <li>✔ Quick learner and team player</li>
          </ul>
        </div>

      </motion.div>
    </section>
  );
}

/* STYLES */

const section = {
  padding: "120px 10%",
  display: "flex",
  justifyContent: "center",
};

const container = {
  maxWidth: "800px",
  textAlign: "center",
};

const title = {
  fontSize: "40px",
  marginBottom: "20px",
};

const desc = {
  color: "#cbd5e1",
  lineHeight: "1.7",
  marginBottom: "15px",
};

const highlight = {
  color: "#38bdf8",
  fontWeight: "bold",
};

const box = {
  marginTop: "30px",
  padding: "20px",
  borderRadius: "12px",
  background: "#0f172a",
  border: "1px solid #1e293b",
};

const list = {
  textAlign: "left",
  marginTop: "10px",
};

export default About;