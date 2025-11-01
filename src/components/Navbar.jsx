import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import logoImage from '../assets/acbb16a7db7c8eecb0227ed7a1867222aa24050e.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (lang) => {
    toggleLanguage(lang);
    setIsMenuOpen(false);
  };

  const t = translations.navbar;

  return (
    <div className="max-w-full z-20">
      {/* Top Banner with Phone Number */}
      <div className="bg-[#074720] text-white text-center py-1">
        <p className="text-sm font-normal">
          {t.callText[language]}  
          <a 
            href="tel:+919810431272" 
            className="underline hover:text-gray-200 transition-colors"
          >
            {t.phoneNumber[language]}
          </a>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-50 h-16 md:h-20  relative w-full">
        <div className=" md:mx-28 absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex gap-2 md:gap-4 items-center justify-between max-w-full  px-4 md:px-0 py-0 w-full">
          {/* Logo */}
          <div className="flex gap-2 md:gap-3 items-center flex-1">
            <div className="h-6 w-16 md:h-8 md:w-24">
              <img 
                alt="प्रकृत्या" 
                className="h-full w-full object-contain" 
                src={logoImage} 
              />
            </div>
          </div>

          {/* Desktop Language Toggle Buttons */}
          <div className="hidden md:flex gap-2 md:gap-3 items-center">
            <button 
              onClick={() => selectLanguage('English')}
              className={`${language === 'English' ? 'bg-[#074720] text-white' : 'bg-white border border-gray-300 text-gray-700 shadow-sm'} flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg transition-colors`}
            >
              <span className="px-0.5 font-semibold text-sm md:text-base leading-5 md:leading-6">
                English
              </span>
            </button>
            <button 
              onClick={() => selectLanguage('हिंदी')}
              className={`${language === 'हिंदी' ? 'bg-[#074720] text-white' : 'bg-white border border-gray-300 text-gray-700 shadow-sm'} flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-2 py-1.5 md:px-4 md:py-2.5 rounded-md md:rounded-lg transition-colors`}
            >
              <span className="px-0.5 font-semibold text-sm md:text-base leading-5 md:leading-6">
                हिंदी
              </span>
            </button>
          </div>

          {/* Mobile Language Dropdown */}
          <div className="md:hidden relative ">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-1 px-3 py-2    transition-colors"
              aria-label="Toggle language menu"
            >
              <span className="text-sm font-medium text-gray-700">
                {language}
              </span>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Language Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-12 bg-white border border-gray-300 rounded-lg shadow-lg py-1 min-w-[100px] z-30">
                <button
                  onClick={() => selectLanguage('English')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'English' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  English
                </button>
                <button
                  onClick={() => selectLanguage('हिंदी')}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${language === 'हिंदी' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-10"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;