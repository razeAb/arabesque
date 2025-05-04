import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-navBg-light dark:bg-navBg-dark text-primaryText-light dark:text-primaryText-dark py-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-Geist text-sm">
        {/* Logo & Rights */}
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Arabesque</p>
          <p className="text-secondaryText-light dark:text-secondaryText-dark">
            © {new Date().getFullYear()} Arabesque. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-4 items-center">
          <a href="mailto:razea1@hotmail.com" className="hover:underline">
            razea1@hotmail.com
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/raze-abou-rish-572316227/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48">
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              />
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/razeAb" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.58 
                0-.287-.011-1.244-.017-2.255-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 
                0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 
                1.02.005 2.047.138 3.006.404 2.289-1.552 3.294-1.23 3.294-1.23.655 1.649.243 2.873.12 3.176.77.84 
                1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.898-.014 
                3.293 0 .321.192.696.801.578C20.565 21.796 24 17.3 24 12c0-6.629-5.371-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
