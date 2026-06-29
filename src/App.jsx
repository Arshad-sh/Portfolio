import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import GitHub from "./sections/GitHub";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const is404 = currentPath !== "/" && currentPath !== "" && currentPath !== "/index.html";

  if (is404) {
    return <NotFound />;
  }

  return (
    <>
      <LoadingScreen onLoadComplete={() => setLoading(false)} />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen bg-[#0B1120] text-[#F8FAFC]"
        >
          <ScrollProgress />
          <CursorGlow />
          
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Education />
          <Achievements />
          <GitHub />
          <Contact />
          <Footer />
          
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;