import React, { createContext , useEffect , useContext } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang); // حفظ اللغة في localStorage
  };

  useEffect(() => {
    // عند التحميل استرجاع اللغة من localStorage
    const savedLang = localStorage.getItem("lang") || i18n.language;
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
