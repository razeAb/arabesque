// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          menu: "Menu",
          about: "About",
          "dishes.title": "Our Signature Dishes",
          "dishes.description": "Explore our menu filled with healthy, hearty, and flavorful dishes made from traditional recipes.",
          categories: {
            All: "All",
            "Arabesque Breakfast": "Arabesque Breakfast",
            "Healthy Dishes": "Healthy Dishes",
            "Main Dishes": "Main Dishes",
            Pizza: "Pizza",
            "Cold Drinks": "Cold Drinks",
          },
        },
      },
      ar: {
        translation: {
          menu: "القائمة",
          about: "حول",
          "dishes.title": "أطباقنا المميزة",
          "dishes.description": "استكشف قائمتنا المليئة بالأطباق الصحية والمشبعة والمحضّرة من وصفات تقليدية.",
          categories: {
            All: "الكل",
            "Arabesque Breakfast": "فطور أرابيسك",
            "Healthy Dishes": "أطباق صحية",
            "Main Dishes": "الأطباق الرئيسية",
            Pizza: "بيتزا",
            "Cold Drinks": "مشروبات باردة",
          },
        },
      },
      nl: {
        translation: {
          menu: "Menu",
          about: "Over ons",
          "dishes.title": "Onze Signatuurgerechten",
          "dishes.description": "Ontdek ons menu vol gezonde, hartige en smaakvolle gerechten op basis van traditionele recepten.",
          categories: {
            All: "Alles",
            "Arabesque Breakfast": "Arabesque Ontbijt",
            "Healthy Dishes": "Gezonde Gerechten",
            "Main Dishes": "Hoofdgerechten",
            Pizza: "Pizza",
            "Cold Drinks": "Koude Dranken",
          },
        },
      },
    },
  });

export default i18n;
