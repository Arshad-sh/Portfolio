function Navbar() {
  return (
    <nav style={nav}>
      <h2 style={{ color: "#38bdf8" }}>Arshad</h2>

      <div>
        <a href="#hero" style={link}>Home</a>
        <a href="#about"  style={link}>About</a>
        <a href="#skills" style={link}>Skills</a>
        <a href="#projects" style={link}>Projects</a>
        <a href="#contact" style={link}>Contact</a>
      </div>
    </nav>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "5px 0%",
  background: "#020617",
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1000,
};

const link = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
};

export default Navbar;