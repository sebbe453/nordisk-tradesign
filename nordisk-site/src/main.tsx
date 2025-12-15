import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import ContactSection from "./components/ContactSection";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <HomePage />
      <ContactSection />
    </main>
  </React.StrictMode>
);
