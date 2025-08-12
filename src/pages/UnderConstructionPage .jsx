import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lightning from "../components/Animation/Lightning"; // Assuming you want to keep the lightning background

const UnderConstructionPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Optional countdown to redirect back
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate(-1); // Go back to previous page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Lightning Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Lightning hue={45} speed={1.2} intensity={0.8} size={1.0} />
      </div>

      {/* Construction Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Animated Construction Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            {/* Construction Hat */}
            <motion.div
              animate={{
                rotate: [-5, 5, -5],
                y: [-2, 2, -2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-4"
            >
              🚧
            </motion.div>
            
            {/* Tools Animation */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -right-6 top-4 text-4xl"
            >
              🔧
            </motion.div>
            
            <motion.div
              animate={{
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -left-6 top-8 text-3xl"
            >
              🔨
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20"
        >
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Under Construction
          </h1>
          
          <h2 className="text-2xl font-semibold text-white mb-6">
            We're Building Something Amazing!
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            This page is currently under development. Our team is working hard to bring you 
            an incredible experience. Please check back soon for exciting updates!
          </p>

          {/* Progress Bar Animation */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full relative"
              >
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Features Coming Soon */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">What's Coming:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-center space-x-3"
              >
                <span className="text-green-400 text-xl">✅</span>
                <span className="text-gray-200">Enhanced User Interface</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="flex items-center space-x-3"
              >
                <span className="text-yellow-400 text-xl">🔄</span>
                <span className="text-gray-200">Advanced Features</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 }}
                className="flex items-center space-x-3"
              >
                <span className="text-blue-400 text-xl">🚀</span>
                <span className="text-gray-200">Performance Optimizations</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1 }}
                className="flex items-center space-x-3"
              >
                <span className="text-purple-400 text-xl">🎨</span>
                <span className="text-gray-200">Beautiful Animations</span>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoHome}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              🏠 Go to Home
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoBack}
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              ← Go Back
            </motion.button>
          </div>

          {/* Auto Redirect Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-8 p-4 bg-black/30 rounded-lg"
          >
            <p className="text-sm text-gray-300">
              Automatically redirecting you back in{" "}
              <span className="font-bold text-yellow-400">{countdown}</span> seconds
            </p>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="bg-yellow-400 h-1 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-8 text-gray-400 text-sm"
        >
          <p>Thank you for your patience! 🙏</p>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;