import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-[50vh] px-4 py-6 bg-white dark:bg-bgPrimary-dark"
    >
      <div className="backdrop-blur-md bg-white/70 dark:bg-bgSecondary-dark/70 border-2 border-gray-300 dark:border-gray-600 shadow-xl rounded-3xl p-8 max-w-2xl w-full text-center font-Geist">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-primaryText-dark">
          About Us
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-secondaryText-dark leading-relaxed">
          Welcome to Arabesque! We serve delicious, hand-crafted meals made with
          the freshest ingredients. Whether it’s smoked meats or veggie options,
          we bring authentic street food flavor with heart.
        </p>
      </div>
    </section>
  );
};

export default About;
