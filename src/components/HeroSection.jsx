// import React, { useState } from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import heroBackground from '../assets/bg.png';
// import productImage from '../assets/Medicine.png';

// const HeroSection = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({ error: "", success: "" });
//   const { language } = useLanguage();

//   const t = translations.hero;

//   const handleConsultation = async () => {
//     setStatus({ error: "", success: "" });

//     // Validate phone number (10 digits)
//     const phoneOk = /^\d{10}$/.test(phoneNumber.trim());
//     if (!phoneOk) {
//       return setStatus({ error: t.validationError[language], success: "" });
//     }

//     try {
//       setLoading(true);

//       // Submit to SheetDB API
//       const response = await fetch("https://sheetdb.io/api/v1/qfy8dwi1fukrf", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: {
//             Name: "",
//             "Phone Number": "+91" + phoneNumber.trim(),
//             Placement: "Top"
//           }
//         })
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       setStatus({ error: "", success: t.successMessage[language] });
//       setPhoneNumber("");
//     } catch (err) {
//       setStatus({ error: t.errorMessage[language], success: "" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative max-h-full max-w-full bg-gray-50 flex flex-col items-center">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${heroBackground})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-20" />
//       </div>

//       {/* Content */}
//       <div className="relative  z-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center pb-12 md:pb-24 pt-8 md:pt-16 px-4 md:px-0 w-full">
//         <div className="flex md:mx-28 flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center max-w-full  py-0 w-full">
//           {/* Left Content */}
//           <div className="flex-1 flex flex-col gap-4 md:gap-8 items-start min-w-0 text-center lg:text-left">
//             <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
//               <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
//                 <h1 className="font-bold  font-instrument text-4xl  lg:text-6xl leading-tight md:leading-[72px] text-amber-50 tracking-tight w-full">
//                   {t.title[language]}
//                 </h1>
//               </div>
//               <p className="font-normal font-pangram text-lg leading-6 md:leading-8 text-white w-full  md:whitespace-pre-line">
//                 {t.subtitle[language]}
//               </p>
//             </div>

//             {/* Phone Input and CTA */}
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-start max-w-full lg:max-w-lg w-full">
//               <div className="flex-1 flex flex-col gap-2 md:gap-3 items-start min-w-0">
//                 <label className="font-pangram text-left pt-2 md:pt-0  text-base leading-5 md:leading-6 text-white w-full">
//                   {t.phoneLabel[language]}
//                 </label>
//                 <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-stretch sm:items-start w-full">
//                   <div className="flex-1 bg-white border border-gray-300 flex rounded-md md:rounded-lg min-w-0">
//                     <div className="flex gap-0.5 items-center overflow-hidden pl-2.5 md:pl-3.5 pr-0 py-2 md:py-2.5">
//                       <span className="font-normal text-base leading-5 md:leading-6 text-gray-900">
//                         +91
//                       </span>
//                     </div>
//                     <div className="flex-1 flex gap-1 md:gap-2 items-center min-w-0 pl-1 md:pl-2 pr-2.5 md:pr-3.5 py-2 md:py-2.5">
//                       <input
//                         type="tel"
//                         value={phoneNumber}
//                         onChange={(e) => {
//                           const value = e.target.value.replace(/\D/g, '');
//                           if (value.length <= 10) {
//                             setPhoneNumber(value);
//                           }
//                         }}
//                         placeholder="1234567890"
//                         maxLength="10"
//                         className="flex-1 font-normal text-sm md:text-base leading-5 md:leading-6 text-gray-500 bg-transparent border-none outline-none min-w-0"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     onClick={handleConsultation}
//                     id="hero-consultation-cta"
//                     disabled={loading}
//                     className="bg-[#AFD455]  border-opacity-12 flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-3 py-2 md:px-4 md:py-3 rounded-md md:rounded-lg text-gray-900 font-medium text-sm md:text-base leading-5 md:leading-6 hover:bg-lime-500 transition-colors whitespace-nowrap disabled:opacity-70"
//                   >
//                     <span className="block sm:hidden">{loading ? t.booking[language] : t.ctaButton[language]}</span>
//                     <span className="hidden sm:block">{loading ? t.booking[language] : t.ctaButton[language]}</span>
//                   </button>
//                 </div>
//                 {status.error && (
//                   <div className="text-xs text-red-300 mt-1">{status.error}</div>
//                 )}
//                 {status.success && (
//                   <div className="text-xs text-green-300 mt-1">{status.success}</div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Product Image */}
//           <div className="w-full  lg:flex-1 h-56 sm:h-64 md:h-80 lg:h-[530px] min-w-0 relative order-last lg:order-last px-4 lg:px-0 flex items-end justify-center">
//             <img
//               alt="Ayurvedic Hair Care Products"
//               // className="w-full h-auto max-h-full object-contain object-bottom drop-shadow-lg"

//               className="
//                 absolute 
//                 bottom-[-25px] sm:bottom-[-140px] xl:bottom-[-85px] lg:bottom-[-40px]
//                 right-0 left-0 mx-auto
//                 h-auto w-auto max-w-full
//                 object-contain drop-shadow-2xl
//               "
//               src={productImage}
//             />

//             {/* Mobile Image Enhancement */}
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 lg:hidden pointer-events-none rounded-lg"></div>
//           </div>
//         </div>
//       </div>
//     </section>

  

//   );
// };

// export default HeroSection;


import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import heroBackground from '../assets/bg.webp';
import mobileBackground from '../assets/Mob.webp';
import productImage from '../assets/Medicine.png';

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ error: "", success: "" });
  const { language } = useLanguage();

  const t = translations.hero;

  const handleConsultation = async () => {
    setStatus({ error: "", success: "" });

    // Validate phone number (10 digits)
    const phoneOk = /^\d{10}$/.test(phoneNumber.trim());
    if (!phoneOk) {
      return setStatus({ error: t.validationError[language], success: "" });
    }

    try {
      setLoading(true);

      // Submit to SheetDB API
      const response = await fetch("https://sheetdb.io/api/v1/qfy8dwi1fukrf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: "",
            "Phone Number": "+91" + phoneNumber.trim(),
            Placement: "Top"
          }
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus({ error: "", success: t.successMessage[language] });
      setPhoneNumber("");
    } catch (err) {
      setStatus({ error: t.errorMessage[language], success: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative max-h-full max-w-full bg-gray-50 flex flex-col items-center">
      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
        style={{
          backgroundImage: `url(${mobileBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center pb-12 md:pb-24 pt-16  px-4 md:px-0 w-full">
        <div className="flex md:mx-28 flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center max-w-full  py-0 w-full">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-8 items-start min-w-0 text-center lg:text-left">
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
                <h1 className="font-bold  font-instrument text-4xl  lg:text-6xl leading-tight md:leading-[72px] text-amber-50 tracking-tight w-full">
                  {t.title[language]}
                </h1>
              </div>
              <p className="font-normal font-pangram  text-base md:text-lg leading-6 md:leading-8 text-white w-full  md:whitespace-pre-line">
                {t.subtitle[language]}
              </p>
            </div>

            {/* Phone Input and CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-start max-w-full lg:max-w-lg w-full">
              <div className="flex-1 flex flex-col gap-2 md:gap-3 items-start min-w-0">
                <label className="font-pangram text-left pt-2 md:pt-0  text-base leading-5 md:leading-6 text-white w-full">
                  {t.phoneLabel[language]}
                </label>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 items-stretch sm:items-start w-full">
                  <div className="flex-1 bg-white border border-gray-300 flex rounded-md md:rounded-lg min-w-0">
                    <div className="flex gap-0.5 items-center overflow-hidden pl-2.5 md:pl-3.5 pr-0 py-2 md:py-2.5">
                      <span className="font-normal text-base leading-5 md:leading-6 text-gray-900">
                        +91
                      </span>
                    </div>
                    <div className="flex-1 flex gap-1 md:gap-2 items-center min-w-0 pl-1 md:pl-2 pr-2.5 md:pr-3.5 py-2.5">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            setPhoneNumber(value);
                          }
                        }}
                        placeholder="1234567890"
                        maxLength="10"
                        className="flex-1 font-normal text-sm md:text-base leading-5 md:leading-6 text-gray-500 bg-transparent border-none outline-none min-w-0"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleConsultation}
                    id="hero-consultation-cta"
                    disabled={loading}
                    className="bg-[#AFD455]  border-opacity-12 flex gap-1 md:gap-1.5 items-center justify-center overflow-hidden px-3 py-3 md:px-4  rounded-md md:rounded-lg text-gray-900 font-medium text-sm md:text-base leading-5 md:leading-6 hover:bg-lime-500 transition-colors whitespace-nowrap disabled:opacity-70"
                  >
                    <span className="block sm:hidden">{loading ? t.booking[language] : t.ctaButton[language]}</span>
                    <span className="hidden sm:block">{loading ? t.booking[language] : t.ctaButton[language]}</span>
                  </button>
                </div>
                {status.error && (
                  <div className="text-xs text-red-300 mt-1">{status.error}</div>
                )}
                {status.success && (
                  <div className="text-xs text-green-300 mt-1">{status.success}</div>
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="w-full  lg:flex-1 h-56 sm:h-64 md:h-80 lg:h-[530px] min-w-0 relative order-last lg:order-last px-4 lg:px-0 flex items-end justify-center">
            <img
              alt="Ayurvedic Hair Care Products"
              // className="w-full h-auto max-h-full object-contain object-bottom drop-shadow-lg"

              className="
                absolute 
                bottom-[-45px] sm:bottom-[-140px] xl:bottom-[-85px] lg:bottom-[-40px]
                right-0 left-0 mx-auto
                h-auto w-auto max-w-full
                object-contain drop-shadow-2xl
              "
              src={productImage}
            />

            {/* Mobile Image Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 lg:hidden pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

  

  );
};

export default HeroSection;