import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Navbar from "./root/Navbar";
import Dishes from "./root/Dishes";
import About from "./root/About";
import Footer from "./root/Footer";
import "./i18n"; // Import i18n configuration

function App() {
  const [theme, setTheme] = useState("light");
  const { i18n } = useTranslation(); // Get i18n instance
  const [language, setLanguage] = useState("en"); // Add state for language

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Apply or remove the 'dark' class on the HTML element
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    // Set text direction based on language
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  // Apply theme on initial load based on user preference or default
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    // Detect browser language or use stored preference
    const browserLang = navigator.language.split("-")[0];
    const savedLang = localStorage.getItem("language") || (["en", "ar", "nl"].includes(browserLang) ? browserLang : "en");

    handleLanguageChange(savedLang);
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="w-full min-h-screen bg-bgPrimary-light dark:bg-bgPrimary-dark text-primaryText-light dark:text-primaryText-dark antialiased overflow-x-hidden">
      <Navbar onThemeSwitch={handleThemeSwitch} theme={theme} language={language} onLanguageChange={handleLanguageChange} />
      
      <Dishes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
