import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-24 flex mr-4 items-center">
      <select
        value={i18n.language}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        onChange={changeLanguage}
        className="appearance-none bg-black/50 text-white rounded-md px-4 h-9 w-full font-medium"
      >
        <option value="en">{t("English")}</option>
        <option value="hi">{t("Hindi")}</option>
        <option value="mr">{t("Marathi")}</option>
      </select>

      {/* Custom arrow (text-based) */}
      <div
        className={`pointer-events-none absolute inset-y-0 right-2 flex items-center text-white text-sm transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        ▾
      </div>
    </div>
  );
};

export default LanguageSelector;
