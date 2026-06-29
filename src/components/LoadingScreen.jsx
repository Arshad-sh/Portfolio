import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen({ onLoadComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 1500); // 1.5 seconds loading experience

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120]"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing glow background */}
            <div className="absolute h-32 w-32 rounded-full bg-blue-500/10 blur-xl animate-pulse" />
            
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/30 bg-[#111827] text-3xl font-extrabold text-blue-500 shadow-lg shadow-blue-500/10"
            >
              AS
            </motion.div>
            
            {/* Loading text / bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <span className="text-xs font-semibold tracking-widest text-[#94A3B8] uppercase">
                Loading Portfolio
              </span>
              <div className="h-1 w-24 overflow-hidden rounded-full bg-[#1E293B]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
