import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-navBg-light dark:bg-navBg-dark text-primaryText-light dark:text-primaryText-dark py-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-Geist text-sm">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Arabesque</p>
          <p className="text-secondaryText-light dark:text-secondaryText-dark">
            © {new Date().getFullYear()} Arabesque. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="mailto:contact@arabesque.com" className="hover:underline">
            contact@arabesque.com
          </a>
          <span>|</span>
          <a href="tel:+972500000000" className="hover:underline">
            +972 50-000-0000
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#menu" className="hover:underline">
            Menu
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
