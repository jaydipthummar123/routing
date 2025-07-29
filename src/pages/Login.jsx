import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lightning from "../components/Animation/Lightning";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    const validEmail = import.meta.env.VITE_EMAIL;
    const validPassword = import.meta.env.VITE_PASSWORD;

    if (email !== validEmail && password !== validPassword) {
      setError("invalid email or password");
      setEmail("");
      setPassword("");
      setisLoading(false);
      return;
    } else if (email !== validEmail) {
      setError("invalid email");
      setEmail("");
      setisLoading(false);
      return;
    } else if (password !== validPassword) {
      setError("invalid password");
      setPassword("");
      setisLoading(false);
      return;
    } else {
      localStorage.setItem("isAuthenticated", "true");
      alert("login suessfully");
      navigate("/home");
      setEmail("");
      setPassword("");
      setError("");
      setisLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
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
        <Lightning hue={230} speed={1.5} intensity={1.2} size={1.1} />
      </div>
      {/* Login Form */}

      <div className="w-full md:w-1/2 flex flex-col justify-center px-3 md:px-36 py-5 absolute   ">
        <h1 className="font-semibold text-3xl text-white mb-5">Sign In</h1>
        <p className="text-sm text-white mb-8">
          Enter your email and password to sign in!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-white text-[14px]">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-5 h-5 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-md checked:bg-blue-600"
              />
              Keep me logged in
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          {error && (
            <div className=" text-red-600 justify-center flex text-xl">
              {" "}
              <h2> {error}</h2>
            </div>
          )}
          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
