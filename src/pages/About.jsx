import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../images/WhatsApp_Image_2024-12-07_at_00.22.51_1855fad0-removebg-preview.png";
import reactLogo from "../assets/react.svg";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-lg border-4 border-blue-500 bg-white"
          />
        </motion.div>
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
            JD Products began as a passion project to create beautiful,
            interactive, and accessible web experiences for everyone. Our
            journey started with a simple idea: to blend creativity with
            technology and deliver digital products that truly make a
            difference.
          </p>
        </motion.div>
      </div>
  
   
      {/* Mission & Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 w-full max-w-4xl rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-200 text-lg mb-8">
          To empower individuals and businesses by building web solutions that
          are not only visually stunning but also intuitive and accessible to
          all.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-200 text-lg mb-4">
          To be recognized as a leader in innovative, user-centric web
          development, inspiring others to push the boundaries of what’s
          possible online.
        </p>
      </motion.section>
      {/* Timeline / Journey Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 w-full max-w-3xl rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
          Our Journey
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">2023</h3>
            <p className="text-gray-300">
              Founded JD Products with a vision for creative, accessible web
              design.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">2024</h3>
            <p className="text-gray-300">
              Launched our first interactive web app and grew our team of
              passionate developers.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
