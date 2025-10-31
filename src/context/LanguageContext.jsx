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
  const [language, setLanguage] = useState(null); // Start with null to indicate loading
  const [isLoading, setIsLoading] = useState(true);

  // Function to get language from URL
  const getLanguageFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam === 'hi' ? 'हिंदी' : 'English';
  };

  // Function to update URL with language parameter
  const updateURL = (lang) => {
    const url = new URL(window.location);
    if (lang === 'हिंदी') {
      url.searchParams.set('lang', 'hi');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.pushState({}, '', url);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    updateURL(lang);
  };

  // Initialize language from URL on component mount
  useEffect(() => {
    const urlLanguage = getLanguageFromURL();
    setLanguage(urlLanguage);
    
    // Add a small delay to ensure smooth loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlLanguage = getLanguageFromURL();
      setLanguage(urlLanguage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamically load Noto Sans Devanagari font when Hindi is selected
  useEffect(() => {
    const linkId = 'hindi-font-link';
    
    if (language === 'हिंदी') {
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

  // Show loader while determining initial language
  if (isLoading || language === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
