import React from "react";
import { useTranslation } from "react-i18next";

const DishesCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={project.image}
        alt={t(`menu.${project.title}.title`, project.title)}
        className="w-full max-w-[160px] h-auto object-contain mb-4"
      />
      <h3 className="text-xl font-bold">{t(`menu.${project.title}.title`, project.title)}</h3>
      <p className="text-sm text-secondaryText-light dark:text-secondaryText-dark">
        {t(`menu.${project.title}.description`, project.description)}
      </p>
      <p className="mt-2 font-bold">€{project.price}</p>
    </div>
  );
};

export default DishesCard;
