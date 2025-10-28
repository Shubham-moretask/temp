import React from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { translations } from './utils/translations'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import AyurvedicIngredientsSection from './components/AyurvedicIngredientsSection'
import ComboPackSection from './components/ComboPackSection'
import TrustAyurvedaSection from './components/TrustAyurvedaSection'
import RealResultsSection from './components/RealResultsSection'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import ConsultationFormCard from './components/ConsultationFormCard'
import TestimonialsSection from './components/TestimonialsSection'
import PrakrityaBetter from './components/PrakrityaBetter'
import HowToUse from './components/HowToUse'
import WhyChoose from './components/WhyChoose'
function AppContent() {
  const { language } = useLanguage();
  const [showFloatingButton, setShowFloatingButton] = React.useState(true);
  const t = translations.floatingButton;
  
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (without + or special characters)
    const phoneNumber = '9910931272'; // Example: 919999999999 for +91 9999999999
    const message = encodeURIComponent('Hello, I am interested in your Ayurvedic hair care products.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleBookAppointment = () => {
    // Find the consultation form section and scroll to it
    const consultationSection = document.getElementById('consultation-form');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Hide the button after scrolling
      setShowFloatingButton(false);
    }
  };






  // Apply font-hindi class to <html> element globally based on language
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (language === 'हिंदी') {
      htmlElement.classList.add('font-hindi');
    } else {
      htmlElement.classList.remove('font-hindi');
    }

    // Cleanup on unmount
    return () => {
      htmlElement.classList.remove('font-hindi');
    };
  }, [language]);




  // Check if consultation form or footer is in viewport
  React.useEffect(() => {
    const checkVisibility = () => {
      const consultationSection = document.getElementById('consultation-form');
      const footer = document.querySelector('footer');
      
      const windowHeight = window.innerHeight;
      let shouldHideButton = false;

      // Check if consultation form is visible
      if (consultationSection) {
        const consultationRect = consultationSection.getBoundingClientRect();
        const isConsultationVisible = consultationRect.top < windowHeight && consultationRect.bottom > 0;
        if (isConsultationVisible) shouldHideButton = true;
      }

      // Check if footer is visible
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
        if (isFooterVisible) shouldHideButton = true;
      }
      
      // Hide button when form or footer is visible, show when scrolled away
      setShowFloatingButton(!shouldHideButton);
    };

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
    // Check on mount
    checkVisibility();

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
      <div className={`min-h-screen bg-gray-100 overflow-x-hidden ${language === 'Hindi' ? 'font-hindi' : ''}`}>
        <Navbar />
        <HeroSection />
        <ProductSection />
        <ComboPackSection />
        <TrustAyurvedaSection />
        <AyurvedicIngredientsSection />
        <RealResultsSection />
        <WhyChoose />
        <HowToUse />
        <PrakrityaBetter />
        <TestimonialsSection />
        <ConsultationFormCard />
        <FAQSection />
        <Footer />

        {/* Floating WhatsApp Icon + Book Appointment Button - Mobile Only */}
        {showFloatingButton && (
          <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden">
            {/* WhatsApp Icon Button - Above the main button */}
            <div className="flex justify-end px-4 pb-6">
              <button
                onClick={handleWhatsAppClick}
                className=" hover:bg-[#20BA5A] text-white rounded-full  shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
              >
                <svg width="52" height="52" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_304_4121)">
                    <g filter="url(#filter0_f_304_4121)">
                      <path d="M14.3165 36.2783L14.9033 36.6252C17.3677 38.085 20.1933 38.8572 23.0749 38.8585H23.0809C31.9301 38.8585 39.132 31.672 39.1356 22.8392C39.1372 18.559 37.4688 14.5339 34.4376 11.5062C32.9509 10.0129 31.1822 8.82889 29.2339 8.02253C27.2856 7.21617 25.1964 6.80352 23.0872 6.80847C14.2312 6.80847 7.02914 13.9941 7.02599 22.8264C7.02163 25.8424 7.87256 28.798 9.48041 31.3516L9.8624 31.9574L8.2402 37.8683L14.3165 36.2783ZM3.60229 42.4475L6.34288 32.4605C4.65269 29.5378 3.76349 26.2221 3.76454 22.8251C3.769 12.1982 12.4336 3.55273 23.0812 3.55273C28.2481 3.55535 33.0979 5.56225 36.7453 9.20526C40.3926 12.8483 42.3994 17.6906 42.3976 22.8405C42.3929 33.4667 33.7269 42.1137 23.0809 42.1137H23.0725C19.84 42.1124 16.6636 41.303 13.8421 39.7675L3.60229 42.4475Z" fill="#B3B3B3" />
                    </g>
                    <path d="M3.40405 42.2493L6.14464 32.2622C4.45154 29.3325 3.56221 26.009 3.5663 22.6268C3.57076 11.9999 12.2354 3.35449 22.883 3.35449C28.0499 3.35711 32.8996 5.36401 36.547 9.00702C40.1944 12.65 42.2012 17.4924 42.1994 22.6423C42.1946 33.2684 33.5287 41.9154 22.8827 41.9154H22.8743C19.6417 41.9141 16.4653 41.1047 13.6439 39.5692L3.40405 42.2493Z" fill="white" />
                    <path d="M22.8887 6.6104C14.0326 6.6104 6.83056 13.7961 6.82741 22.6283C6.82305 25.6443 7.67398 28.5999 9.28183 31.1535L9.66382 31.7596L8.04162 37.6705L14.1182 36.0802L14.705 36.4271C17.1694 37.8869 19.995 38.6588 22.8766 38.6604H22.8826C31.7318 38.6604 38.9339 31.474 38.9373 22.6412C38.944 20.5359 38.5322 18.4502 37.7258 16.5049C36.9194 14.5596 35.7343 12.7932 34.2393 11.3081C32.7525 9.81484 30.9838 8.63077 29.0354 7.82441C27.0871 7.01805 24.9979 6.60541 22.8887 6.6104Z" fill="url(#paint0_linear_304_4121)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.055 14.5696C17.6932 13.7675 17.3125 13.7512 16.9689 13.7373L16.0437 13.7261C15.7219 13.7261 15.1989 13.8466 14.7568 14.3287C14.3147 14.8109 13.0674 15.9761 13.0674 18.3462C13.0674 20.7163 14.797 23.0064 15.038 23.3282C15.279 23.65 18.3769 28.6686 23.2828 30.5995C27.3597 32.2042 28.1893 31.8851 29.0746 31.8049C29.9598 31.7247 31.9301 30.6396 32.3321 29.5147C32.734 28.3898 32.7343 27.4261 32.6138 27.2246C32.4933 27.0231 32.1714 26.9033 31.6883 26.6623C31.2053 26.4212 28.8328 25.2559 28.3904 25.0951C27.948 24.9342 27.6264 24.8543 27.3043 25.3364C26.9822 25.8185 26.0583 26.9031 25.7766 27.2246C25.4949 27.5461 25.2137 27.5864 24.7307 27.3456C24.2476 27.1048 22.6934 26.596 20.8494 24.9549C19.4146 23.678 18.4462 22.1011 18.1642 21.6192C17.8822 21.1373 18.1343 20.8764 18.3763 20.6363C18.5929 20.4204 18.8589 20.0738 19.1007 19.7926C19.3424 19.5114 19.422 19.3105 19.5827 18.9895C19.7433 18.6685 19.6633 18.3866 19.5425 18.1457C19.4217 17.9049 18.484 15.5223 18.055 14.5696Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_f_304_4121" x="-3.4597" y="-3.50927" width="52.9194" height="53.019" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="3.531" result="effect1_foregroundBlur_304_4121" />
                    </filter>
                    <linearGradient id="paint0_linear_304_4121" x1="22.5555" y1="8.5337" x2="22.7177" y2="35.9225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#57D163" />
                      <stop offset="1" stop-color="#23B33A" />
                    </linearGradient>
                    <clipPath id="clip0_304_4121">
                      <rect width="46" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>


              </button>
            </div>

            {/* Full Width Book Appointment Button */}
            <div className="bg-white shadow-2xl p-4">
              <button
                onClick={handleBookAppointment}
                className="w-full bg-[#074720] text-white py-2.5 px-3.5 rounded-lg text-base font-medium hover:brightness-110 active:brightness-95 disabled:opacity-70"
                aria-label="Book an appointment"
              >
                <span className="text-lg">{t.bookAppointment[language]}</span>
              </button>
            </div>
          </div>
        )}
      </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
