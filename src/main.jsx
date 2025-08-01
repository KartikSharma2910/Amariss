import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      theme="dark"
      draggable
      pauseOnHover
      autoClose={5000}
      pauseOnFocusLoss
      position="top-center"
    />
    <App />
  </StrictMode>
);
