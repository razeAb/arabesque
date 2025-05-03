import React from "react";

const DishesCard = ({ project }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3 rounded-xl bg-bdSecondary-light dark:bg-black hover:scale-110 hover:border-[1px] cursor-pointer shadow-xl dark:shadow-bgPrimary-dark">
      <img src={project.image} alt={project.title}  className="flex flex-1 w-full md:w-40 p-3 hover:scale-110 hover:duration-500"/>
      <div className="p-1 w-full">
        <h3 className="text-lg font-Nuinto font-semibold text-primaryText-light dark:text-primaryText-dark upprcase w-full mb-2">{project.title}</h3>
        <p className="text-base font-Nuinto font-normal text-secondaryText-light dark:textsecondaryText-dark mb-2 ">{project.description}</p>
        <p className="flex justify-between font-Bebas text-yellow-500 mt-1 font-bold text-lg tracking-wider">${project.price}</p>
      </div>
    </div>
  );
};

export default DishesCard;
