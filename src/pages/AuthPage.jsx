import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lightning from "../components/Animation/Lightning";
import { toast, ToastContainer } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";

// Login Validation Schema
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Register Validation Schema
const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const AuthPage = () => {
  const navigate = useNavigate();
  const { Login, Register } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log("Login Form Values:", values);
    Login(values)
      .then(() => {
        toast.success("Login successful!");
        resetForm();
        navigate("/home");
      })
      .catch((error) => {
        console.error("Login Error:", error);
        toast.error("Login failed. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleRegisterSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log("Register Form Values:", values);
    
    // Remove confirmPassword from the values before sending to API
    const { confirmPassword, ...registrationData } = values;
    
    Register(registrationData)
      .then(() => {
        toast.success("Registration successful! Please sign in.");
        resetForm();
        setIsLogin(true); // Switch to login form after successful registration
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        toast.error("Registration failed. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
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

      {/* Auth Form */}
      <motion.div 
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-1/3 flex flex-col justify-center px-3 md:px-20 py-5 absolute backdrop-blur-md bg-white/10 rounded-xl"
      >
        <h1 className="font-semibold text-3xl mb-5 text-blue-600">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-sm text-white mb-8">
          {isLogin 
            ? "Enter your username and password to sign in!" 
            : "Create your account to get started!"
          }
        </p>

        {isLogin ? (
          // Login Form
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          // Register Form
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleRegisterSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full h-11 rounded-lg border px-4 py-2.5 placeholder:text-gray-400 text-white bg-transparent border-blue-600 text-sm focus:outline-none focus:ring focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Creating account..." : "Sign up"}
                </button>
              </Form>
            )}
          </Formik>
        )}

        {/* Toggle Auth Mode */}
        <div className="text-center mt-6">
          <p className="text-sm text-white">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </motion.div>
      
      <ToastContainer />
    </div>
  );
};

export default AuthPage;