import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  // Dynamically load Noto Sans Devanagari font when Hindi is selected
  useEffect(() => {
    const linkId = 'hindi-font-link';
    
    if (language === 'Hindi') {
      // Check if the font link already exists
      if (!document.getElementById(linkId)) {
        // Create and append the link element for Noto Sans Devanagari
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Noto+Sans+Devanagari:wght@100..900&display=swap';
        document.head.appendChild(link);
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
