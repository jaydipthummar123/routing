
import { href, NavLink } from "react-router-dom";
import im1 from "../../images/WhatsApp_Image_2024-12-07_at_00.22.51_1855fad0-removebg-preview.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Movies", href: "/movies" },
  { name: "service", href: "/service" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const removeToken = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  return (
    <header className="text-white shadow sticky top-0 z-50 backdrop-blur-md bg-white/10">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={im1}
            alt="Badge"
            className="w-12 h-12 object-cover rounded-full mr-2"
          />
          <span className="text-2xl font-bold m-0 animate-fade-in-down transition-colors duration-200 relative hidden sm:inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 ">
            JD Port
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? `font-medium transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600 text-blue-600`
                  : `text-gray-300 font-medium transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600`
              }
              tabIndex={0}
            >
              {link.name}
            </NavLink>
          ))}
          
        </nav>
        <NavLink to={"/"}>
          <button
            className="tetx-bold pt-2 pb-2 pl-3 pr-3  font-semibold font-mono rounded-xl bg-red-600 hover:bg-red-800 cursor-pointer "
            onClick={removeToken}
          >
            Logout{" "}
          </button>
        </NavLink>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className="block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className="block w-6 h-0.5 bg-white rounded transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          ></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4"
          >
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive
                        ? `block py-2 px-4 rounded text-blue-500 bg-gray-800 font-semibold`
                        : `block py-2 px-4 rounded text-gray-200 hover:bg-gray-800 hover:text-blue-400`
                    }
                    onClick={() => setMenuOpen(false)}
                    tabIndex={0}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Tailwind animation */}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 2s ease;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </header>
  );
};

export default Header;
