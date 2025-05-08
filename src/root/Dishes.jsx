import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LINK, ARABESQUE_BREAKFAST, HEALTHY_DISHES, MAIN_DISHES, PIZZA, COLD_DRINKS } from "../constants";
import DishesCard from "../components/DishesCard";

const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { t } = useTranslation(); // ✅

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setSelectedCategory(targetId);
  };

  const allItems = [
    ...ARABESQUE_BREAKFAST.map((item) => ({ ...item, category: "Arabesque Breakfast" })),
    ...HEALTHY_DISHES.map((item) => ({ ...item, category: "Healthy Dishes" })),
    ...MAIN_DISHES.map((item) => ({ ...item, category: "Main Dishes" })),
    ...PIZZA.map((item) => ({ ...item, category: "Pizza" })),
    ...COLD_DRINKS.map((item) => ({ ...item, category: "Cold Drinks" })),
  ];

  const filteredItems = selectedCategory === "All" ? allItems : allItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="container flex flex-col items-center mx-auto py-16">
      <div className="m-5 md:m-10">
        <h1 className="font-Geist font-bold mb-8 tracking-wider text-center">
          {t("dishes.title")} {/* ← e.g., "Our Signature Dishes" */}
        </h1>

        <div className="font-Geist tracking-wider text-center dark:text-seconadryText">
          <p>{t("dishes.description")}</p>

          <div className="bg-red-600 text-white text-center py-2 text-sm md:text-base font-semibold mt-4">
            <span className="rtl:text-right ltr:text-center">
              {t("dishes.phoneTitle")}
              <span dir="ltr" className="inline-block mx-2">
                <a href="tel:+31687980600" className="underline mx-1">
                  +31 6 87980600
                </a>{" "}
                /
                <a href="tel:+31685566544" className="underline mx-1">
                  +31 6 85566544
                </a>{" "}
                /
                <a href="tel:+31623545600" className="underline mx-1">
                  +31 6 23545600
                </a>
              </span>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center items-center my-10">
          <div className="font-Geist grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-flow-col md:justify-center md:space-x-2">
            {LINK.map((link, index) => (
              <a
                href={`#${link.targetId}`}
                key={index}
                onClick={(e) => handleScroll(e, link.targetId)}
                className={`bg-secondary-light dark:bg-bgSecondary-dark text-sm font-semibold rounded-full w-36 h-12 flex items-center justify-center shadow-lg text-primaryText-light dark:text-primaryText-dark ${
                  selectedCategory === link.targetId
                    ? "bg-yellow-400 dark:bg-yellow-400 text-black dark:text-black font-bold tracking-wide shadow-xl"
                    : ""
                } p-3 text-center hover:bg-yellow-500 hover:text-black`}
              >
                {t(`categories.${link.targetId}`)} {/* ← Translatable categories */}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 my-8 p-5">
          {filteredItems.map((project, index) => (
            <DishesCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
