
import { href, NavLink } from "react-router-dom";
import im1 from "../../images/WhatsApp_Image_2024-12-07_at_00.22.51_1855fad0-removebg-preview.png";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Movies", href: "/movies" },
  { name: "service", href: "/service" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { Logout, user } = useContext(AuthContext);

  // Function to get user initials as fallback avatar
  const getUserInitials = (user) => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
    } else if (user?.username) {
      return user.username.charAt(0).toUpperCase();
    } else if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const handleLogout = () => {
    Logout();
    setUserMenuOpen(false);
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
          <span className="text-2xl font-bold m-0 animate-fade-in-down transition-colors duration-200 relative hidden sm:inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-blue-600">
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

        {/* User Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            {/* User Avatar */}
            <div className="relative">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user?.firstName || user?.username || "User"}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm border-2 border-blue-500">
                  {getUserInitials(user)}
                </div>
              )}
              {/* Online status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            {/* User Name */}
            <div className="text-right">
              <p className="text-sm font-semibold text-white">
                {user?.firstName && user?.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user?.username || "User"}
              </p>
              <p className="text-xs text-gray-300">
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <NavLink to={"/"}>
            <button
              className="text-bold pt-2 pb-2 pl-3 pr-3 font-semibold font-mono rounded-xl bg-red-600 hover:bg-red-800 cursor-pointer transition-colors duration-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </NavLink>
        </div>

        {/* Mobile User Menu & Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile User Avatar */}
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="relative focus:outline-none"
          >
            {user?.image ? (
              <img
                src={user.image}
                alt={user?.firstName || user?.username || "User"}
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs border-2 border-blue-500">
                {getUserInitials(user)}
              </div>
            )}
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></div>
          </button>

          {/* Hamburger for Mobile */}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
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
      </div>

      {/* Mobile User Menu */}
      <AnimatePresence>
        {userMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute right-4 top-20 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 z-50"
          >
            <div className="flex items-center space-x-3 mb-3">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user?.firstName || user?.username || "User"}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {getUserInitials(user)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-white">
                  {user?.firstName && user?.lastName
                    ? `${user.firstName} ${user.lastName}`
                    : user?.username || "User"}
                </p>
                <p className="text-xs text-gray-300">
                  {user?.email || "user@example.com"}
                </p>
              </div>
            </div>
            <button
              className="w-full text-left px-3 py-2 text-red-400 hover:bg-gray-700 rounded transition-colors duration-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
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
