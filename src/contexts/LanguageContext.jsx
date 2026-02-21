// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      <div dir={t.dir}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);