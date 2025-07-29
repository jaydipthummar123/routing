import React from "react";
import { motion } from "framer-motion";

const Contectus = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl rounded-xl shadow-lg p-8 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          We'd love to hear from you! Reach out with any questions, feedback, or
          collaboration ideas.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex-1 rounded-lg p-6 shadow border border-blue-800 text-left"
          >
            <h2 className="text-xl font-bold text-blue-400 mb-2">
              Contact Details
            </h2>
            <p className="text-gray-200 mb-2">
              <span className="font-semibold">Address:</span> 123 Main Street,
              Surat, Gujarat, India
            </p>
            <p className="text-gray-200 mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@jdproducts.com"
                className="text-blue-400 hover:underline"
              >
                jaydipthummar47@gmail.com
              </a>
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+919601052981"
                className="text-blue-400 hover:underline"
              >
                +91 9601052981
              </a>
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex-1 rounded-lg p-6 shadow border border-blue-800"
          >
            <h2 className="text-xl font-bold text-blue-400 mb-2">Location</h2>
            <div className="rounded-lg overflow-hidden border border-blue-700 shadow-lg">
              <iframe
                title="JD Products Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.666073289305!2d72.8310620752022!3d21.20786638047859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5e2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1717777777777!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-gray-400 text-sm">
          We'll get back to you as soon as possible!
        </div>
      </motion.section>
    </main>
  );
};

export default Contectus;
