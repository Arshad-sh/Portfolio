import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0B1120] px-4 text-center overflow-hidden">
      {/* Blurred background glow */}
      <div className="absolute h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" style={{ top: "20%", left: "30%" }} />
      <div className="absolute h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" style={{ bottom: "20%", right: "30%" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-md rounded-2xl p-8 shadow-2xl relative z-10 border border-white/5"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500"
        >
          <FaExclamationTriangle className="text-3xl" />
        </motion.div>

        <h1 className="text-7xl font-extrabold text-[#F8FAFC]">404</h1>
        <h2 className="mt-4 text-xl font-bold text-blue-500">Page Not Found</h2>
        <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoHome}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer"
        >
          <FaHome />
          <span>Back to Home</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default NotFound;
