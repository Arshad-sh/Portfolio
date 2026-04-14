import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="#"><FaGithub /></a>
      <a href="#"><FaLinkedin /></a>
      <a href="#"><FaInstagram /></a>
    </div>
  );
}

export default Sidebar;