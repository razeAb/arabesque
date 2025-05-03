import React, { useState, useEffect } from "react";
import Navbar from "./root/Navbar";
import Dishes from "./root/Dishes";
import About from "./root/About";
import Footer from "./root/Footer";

function App() {
  const [theme, setTheme] = useState("light");

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

  // Apply theme on initial load based on user preference or default
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-bgPrimary-light dark:bg-bgPrimary-dark text-primaryText-light dark:text-primaryText-dark antialiased overflow-x-hidden">
      <Navbar onThemeSwitch={handleThemeSwitch} theme={theme} />
      <Dishes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
