import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { ReduxProvider } from "./lib/store/ReduxProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </AuthProvider>
    </ReduxProvider>
  </StrictMode>
);
