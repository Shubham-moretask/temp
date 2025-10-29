// // import React from 'react';
// // import { useLanguage } from '../context/LanguageContext';
// // import { translations } from '../utils/translations';
// // import videoSrc from '../assets/4993658_Empty_Beauty_1280x720.mp4';

// // const TrustAyurvedaSection = () => {
// //   const { language } = useLanguage();
// //   const t = translations.ayurveda;
// //   const handleBookConsultation = () => {
// //     const formSection = document.getElementById('consultation-form');
// //     if (formSection) {
// //       formSection.scrollIntoView({ 
// //         behavior: 'smooth',
// //         block: 'start'
// //       });
// //     }
// //   };

// //   const handleVideoError = (e) => {
// //     console.log('Video file not found - using gradient background fallback');
// //     // Hide video element if video fails to load, fallback background will show
// //     e.target.style.display = 'none';
// //   };

// //   const handleVideoLoad = () => {
// //     console.log('Video loaded successfully');
// //   };

// //   return (
// //     <section className="relative max-w-full min-h-[400px] md:min-h-[500px] bg-gray-900 overflow-hidden">
// //       {/* Background Video with Fallback */}
// //       <div className="absolute inset-0">
// //         {/* Gradient background as fallback while video loads or if video fails */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"></div>
        
// //         <video
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover"
// //           onError={handleVideoError}
// //           onLoadedData={handleVideoLoad}
// //           style={{ display: 'block' }}
// //           src={videoSrc}
// //         >
// //           {/* Fallback message */}
// //           <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"></div>
// //         </video>
// //         {/* Dark overlay for better text readability */}
// //         <div className="absolute inset-0 bg-black bg-opacity-50" />
// //       </div>

// //       {/* Content Container */}
// //       <div className="relative z-10 flex items-center justify-start h-full min-h-[400px] md:min-h-[500px] px-4 md:px-0 md:mx-20">
// //         <div className="max-w-sm">
// //           {/* Main Heading */}
// //           <div className="space-y-4 md:space-y-6">
// //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
// //               {t.title[language]}
// //             </h2>
            
// //             {/* Description */}
// //             <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
// //               {t.subtitle[language]}
// //             </p>
            
// //             {/* CTA Button */}
// //             <div className="pt-4 md:pt-6">
// //               <button
// //                 onClick={handleBookConsultation}
// //                 className="bg-[#AFD455] hover:bg-lime-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900"
// //               >
// //                 {t.cta[language]}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TrustAyurvedaSection;


// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import videoSrc from '../assets/4993658_Empty_Beauty_1280x720.mp4';

// const TrustAyurvedaSection = () => {
//   const { language } = useLanguage();
//   const t = translations.ayurveda;
//   const handleBookConsultation = () => {
//     const formSection = document.getElementById('consultation-form');
//     if (formSection) {
//       formSection.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   const handleVideoError = (e) => {
//     console.log('Video file not found - using gradient background fallback');
//     e.target.style.display = 'none';
//   };

//   const handleVideoLoad = () => {
//     console.log('Video loaded successfully');
//   };

//   return (
//     <section className="relative max-w-full min-h-[400px] md:min-h-[500px] bg-[#1E1E1E] overflow-hidden">
//       {/* Background Video - Positioned to the right */}
//       <div className="absolute left-64 inset-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           onError={handleVideoError}
//           onLoadedData={handleVideoLoad}
//           style={{ display: 'block' }}
//           src={videoSrc}
//         >
//           <div className="absolute inset-0 bg-[#1E1E1E]"></div>
//         </video>
//       </div>

//       {/* Custom Gradient Overlay - Creates the text background effect */}
//       <div 
//         className="absolute inset-0 z-10" 
//         style={{
//           background: 'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 25.56%, #1E1E1E 74.52%)'
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-20 flex items-center justify-start h-full min-h-[400px] md:min-h-[500px] px-4 md:px-0 md:mx-20">
//         <div className="max-w-sm md:max-w-md lg:max-w-lg">
//           {/* Main Heading */}
//           <div className="space-y-4 md:space-y-6">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight  whitespace-pre-line">
//               {t.title[language]}
//             </h2> 
            
//             {/* Description */}
//             <p className="text-lg text-gray-200 leading-relaxed">
//               {t.subtitle[language]}
//             </p>
            
//             {/* CTA Button */}
//             <div className="pt-4 md:pt-6">
//               <button
//                 onClick={handleBookConsultation}
//                 className="bg-[#AFD455] hover:bg-lime-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900"
//               >
//                 {t.cta[language]}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustAyurvedaSection;


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import videoSrc from '../assets/4993658_Empty_Beauty_1280x720.mp4';

const TrustAyurvedaSection = () => {
  const { language } = useLanguage();
  const t = translations.ayurveda;
  const handleBookConsultation = () => {
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleVideoError = (e) => {
    console.log('Video file not found - using gradient background fallback');
    e.target.style.display = 'none';
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  return (
    <section className="relative max-w-full min-h-[600px] md:min-h-[500px] bg-[#1E1E1E] overflow-hidden ">
      {/* Background Video - Positioned to the right on desktop, bottom on mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] md:inset-0 md:left-64 md:h-full ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          style={{ display: 'block' }}
          src={videoSrc}
        >
          <div className="absolute inset-0 bg-[#1E1E1E]"></div>
        </video>
      </div>

      {/* Mobile Gradient Overlay - Top to bottom, stronger gradient */}
      <div 
        className="md:hidden absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(180deg, #1E1E1E 0%, #1E1E1E 40%, rgba(30, 30, 30, 0.00) 65%, rgba(30, 30, 30, 0.00) 100%)'
        }}
      />
      
      {/* Desktop Gradient Overlay - Left to right */}
      <div 
        className="hidden md:block absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(270deg, rgba(30, 30, 30, 0.00) 25.56%, #1E1E1E 74.52%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 flex items-start md:items-center justify-start h-full min-h-[600px] md:min-h-[500px] px-6 md:px-0 md:mx-20 my-12 md:my-0">
        <div className="max-w-[340px] md:max-w-md lg:max-w-lg">
          {/* Main Heading */}
          <div className="space-y-3 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] md:leading-tight whitespace-pre-line">
              {t.title[language]}
            </h2> 
            
            {/* Description */}
            <p className="text-lg text-gray-200 leading-relaxed md:whitespace-pre-line font-pangram">
              {t.subtitle[language]}
            </p>
            
            {/* CTA Button */}
            <div className="pt-2 md:pt-6 hidden md:block">
              <button
                onClick={handleBookConsultation}
                className="font-pangram bg-[#AFD455] hover:bg-lime-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {t.cta[language]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAyurvedaSection;