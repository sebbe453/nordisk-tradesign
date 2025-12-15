import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Behåll denna för styling
// ... övriga imports

// IMPORTERA DINA KOMPONENTER FRÅN DERAS RIKTIGA PLATSER INOM /src
import HomePage from "./pages/HomePage.tsx"; 
import ContactSection from "./components/ContactSection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <HomePage />
      <ContactSection />
    </main>
  </React.StrictMode>
);