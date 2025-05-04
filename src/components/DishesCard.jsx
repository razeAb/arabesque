// DishesCard.jsx
import React from "react";

const DishesCard = ({ project }) => {
  return (
    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-[160px] h-auto object-contain mb-4"
      />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm text-secondaryText-light dark:text-secondaryText-dark">{project.description}</p>
      <p className="mt-2 font-bold">${project.price}</p>
    </div>
  );
};

export default DishesCard;
