import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "../../../HomePage.tsx";
import ContactSection from "../../../ContactSection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <HomePage />
      <ContactSection />
    </main>
  </React.StrictMode>
);