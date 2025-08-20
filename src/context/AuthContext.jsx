import axios from "axios";
import { createContext, useEffect, useState } from "react";

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
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.log("Something went wrong");
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      delete axios.defaults.headers.common["Authorization"];
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const Login = async (userLoginData) => {
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
        return Promise.reject(new Error("Login failed"));
      }
    } catch (error) {
      console.error("Login error:", error);
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  const Register = async (userRegisterData) => {
    try {
      setLoading(true);
      const response = await axios.post("https://dummyjson.com/users/add", {
        ...userRegisterData,
        age: 25, // dummyjson requires age
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Registration successful:", response.data);
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(new Error("Registration failed"));
      }
    } catch (error) {
      console.error("Registration error:", error);
      return Promise.reject(
        new Error(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, Login, Register, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
