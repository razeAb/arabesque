import React, { useState } from "react";
import { LINKS } from "../constants/index.jsx";
import { MoonIcon, SunIcon, MenuIcon, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import USAFlag from "../components/flags/usaFlag.jsx";
import SaudiFlag from "../components/flags/saudiFlag.jsx";
import DutchFlag from "../components/flags/netherlandsFlag.jsx";

function Navbar({ theme, onThemeSwitch }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 20;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav className="flex justify-center w-screen fixed top-5 z-50 px-3">
      <div className="flex w-full md:w-[45rem] items-center justify-between p-2 backdrop-blur-md shadow-sm border border-gray-300 dark:border-gray-600 font-semibold rounded-full bg-navBg-light/70 dark:bg-navBg-dark/70 text-primaryText-light dark:text-primaryText-dark">
        {/* Logo */}
        <a href="/">
          <img src="/photos/logo.jpg" alt="Logo" className="h-12 w-auto rounded-full" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 font-Geist">
          {LINKS.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="text-sm px-2 text-primaryText-light dark:text-primaryText-dark hover:opacity-70"
            >
              {t(link.text)}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 mr-3">
          {/* Emoji Flag Buttons */}
          <div className="flex gap-2 text-2xl">
            <button onClick={() => changeLanguage("en")} title="English" className="hover:animate-wiggle">
              <USAFlag />
            </button>
            <button onClick={() => changeLanguage("ar")} title="Arabic" className="hover:animate-wiggle">
              <SaudiFlag />
            </button>
            <button onClick={() => changeLanguage("nl")} title="Dutch" className="hover:animate-wiggle">
              <DutchFlag />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className="flex transition-transform duration-300 ease-in-out hover:rotate-12 active:scale-90"
            onClick={onThemeSwitch}
            key={theme}
          >
            {theme === "dark" ? <SunIcon className="animate-wiggle" /> : <MoonIcon className="animate-wiggle" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="flex lg:hidden" onClick={toggleMobileMenu}>
            {isMobileOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="absolute top-[80px] w-full max-w-[45rem] bg-white dark:bg-navBg-dark/90 shadow-md rounded-xl py-4 px-6 flex flex-col gap-2 font-Geist z-40 backdrop-blur-lg text-primaryText-light dark:text-primaryText-dark font-semibold">
          {LINKS.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleScroll(e, link.targetId)}
              className="text-center py-3 text-lg font-medium uppercase hover:opacity-80"
            >
              {t(link.text)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
