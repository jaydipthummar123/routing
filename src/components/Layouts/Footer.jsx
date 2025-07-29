// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white py-10 px-6 md:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Us</h2>
          <p className="text-sm text-gray-400">
            We build modern UI components and interactive experiences using
            Tailwind CSS and React.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400 flex flex-col ">
            <NavLink
              to={"/"}
              className="hover:text-white transition duration-300 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="hover:text-white transition duration-300 cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className="hover:text-white transition duration-300 cursor-pointer"
            >
              Contact
            </NavLink>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-3">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-3">
            Stay updated with our latest news and products.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full sm:w-auto  rounded-md text-white font-semibold"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="" className="hover:text-blue-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/_itz_jaydip__/"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jaydip Thummar | All Rights Reserved
      </div>
    </motion.footer>
  );
};

export default Footer;
