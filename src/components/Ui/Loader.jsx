// components/Loader.jsx
import React from "react";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="flex space-x-2">
        <motion.span
          className="w-4 h-4 bg-white rounded-full"
          transition={bounceTransition}
          animate={{ y: ["100%", "-100%"] }}
        />
        <motion.span
          className="w-4 h-4 bg-white rounded-full"
          transition={{ ...bounceTransition, delay: 0.2 }}
          animate={{ y: ["100%", "-100%"] }}
        />
        <motion.span
          className="w-4 h-4 bg-white rounded-full"
          transition={{ ...bounceTransition, delay: 0.4 }}
          animate={{ y: ["100%", "-100%"] }}
        />
      </div>
    </div>
  );
};

export default Loader;
