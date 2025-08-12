import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (token) => {
    try {
      const response = await axios.get("https://dummyjson.com/auth/me");
      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
      // If token is invalid, clear it
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      delete axios.defaults.headers.common["Authorization"];
    } finally {
      setLoading(false);
    }
  };

  const Login = async (userLoginData) => {
    console.log(userLoginData);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        userLoginData
      );
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        await fetchData(accessToken);
        return Promise.resolve(response.data);
      } else {
        console.log("something went wrong");
        return Promise.reject(new Error("Login failed"));
      }
    } catch (error) {
      console.log("Login error:", error);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  const Register = async (userRegisterData) => {
    console.log(userRegisterData);
    try {
      setLoading(true);
      
      // Since dummyjson.com doesn't have a real register endpoint,
      // we'll simulate registration by creating a user
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        {
          ...userRegisterData,
          age: 25, // Default age since it's required by dummyjson
          // Add other required fields with default values
        }
      );
      
      if (response.status === 200 || response.status === 201) {
        console.log("Registration successful:", response.data);
        return Promise.resolve(response.data);
      } else {
        console.log("something went wrong during registration");
        return Promise.reject(new Error("Registration failed"));
      }
    } catch (error) {
      console.log("Registration error:", error);
      
      // Handle different types of registration errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.message || "Registration failed";
        return Promise.reject(new Error(errorMessage));
      } else if (error.request) {
        // Network error
        return Promise.reject(new Error("Network error. Please try again."));
      } else {
        // Other error
        return Promise.reject(new Error("Registration failed. Please try again."));
      }
    } finally {
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    // Note: You should use navigate hook in the component, not here
    // Navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, Logout, Login, Register }}>
      {children}
    </AuthContext.Provider>
  );
};