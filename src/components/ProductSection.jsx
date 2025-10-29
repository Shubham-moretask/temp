// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';

// // Import product images
// const productImage1 = '/src/assets/d4f9d7594b36a5f7b678518d6df5059adb905a28.png';
// const productImage2 = '/src/assets/ae79ce6b046e3c2bc83ff542c553db10af54629a.png';
// const productImage3 = '/src/assets/3a030033e12bc6bcf63ecf66d1dad867faef3517.png';
// const productImage4 = '/src/assets/06a95442231f12f37f4724880158e07e52854e8f.png';

// const ProductSection = () => {
//   const { language } = useLanguage();
//   const t = translations.products;

//   const scrollToForm = () => {
//     const formSection = document.getElementById('consultation-form');
//     if (formSection) {
//       formSection.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   const products = [
//     {
//       id: 1,
//       name: t.hairOil.name[language],
//       image: productImage1,
//       benefits: t.hairOil.benefits[language]
//     },
//     {
//       id: 2,
//       name: t.hairShampoo.name[language],
//       image: productImage2,
//       benefits: t.hairShampoo.benefits[language]
//     },
//     {
//       id: 3,
//       name: t.hairConditioner.name[language],
//       image: productImage3,
//       benefits: t.hairConditioner.benefits[language]
//     },
//     {
//       id: 4,
//       name: t.hairCapsules.name[language],
//       image: productImage4,
//       benefits: t.hairCapsules.benefits[language]
//     }
//   ];

//   return (
//     <section className="py-16  bg-white">
//       <div className="max-w-full  px-4 md:px-0 md:mx-20">
//         {/* Section Header */}
//         <div className=" text-left md:text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
//             {t.sectionTitle[language]}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8 font-pangram">
//             {t.sectionSubtitle[language]}
//           </p>
//         </div>

//         {/* Product Cards Grid */}
//         <div className="">
//           {/* Mobile Horizontal Scroll */}
//           <div className="flex overflow-x-auto gap-8 pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
//             {products.map((product) => (
//               <div key={product.id} className="relative group flex-shrink-0 snap-center">
//                 {/* Product Card */}
//                 <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
//                   {/* Product Image */}
//                   <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 flex-shrink-0">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover rounded-t-xl"
//                     />
                    
//                     {/* Product Name Badge */}
//                     <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
//                       <span className="font-semibold  text-base">
//                         {product.name}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div className="p-6 bg-[#f9f6f1] flex-1 flex flex-col">
//                     {/* Benefits List */}
//                     <div className="space-y-3 mb-6 flex-1">
//                       {product.benefits.map((benefit, index) => (
//                         <div key={index}>
//                           <p className="text-gray-600 text-lg leading-7 font-pangram">
//                             {benefit}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA Button */}
//                     <button 
//                       onClick={scrollToForm}
//                       className="w-full bg-[#074720] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center leading-tight flex-shrink-0"
//                     >
//                       {t.cta[language]}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Desktop Grid */}
//           <div className="hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory  md:grid grid-cols-2 lg:grid-cols-4 gap-8 ">
//             {products.map((product) => (
//               <div key={product.id} className="relative group md:min-w-[360px] 3xl:min-w-full" >
//                 {/* Product Card */}
//                 <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
//                   {/* Product Image */}
//                   <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 flex-shrink-0">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover rounded-t-xl"
//                     />
                    
//                     {/* Product Name Badge */}
//                     <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
//                       <span className="font-semibold text-base">
//                         {product.name}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div className="p-6 bg-[#f9f6f1] flex-1 flex flex-col">
//                     {/* Benefits List */}
//                     <div className="space-y-3 mb-6 flex-1">
//                       {product.benefits.map((benefit, index) => (
//                         <div key={index}>
//                           <p className="text-gray-600 text-lg leading-7 font-pangram">
//                             {benefit}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA Button */}
//                     <button 
//                       onClick={scrollToForm}
//                       className="font-pangram w-full bg-[#074720] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center leading-tight flex-shrink-0"
//                     >
//                       {t.cta[language]}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import productImage1 from '../assets/first.png';
import productImage2 from '../assets/second.png';
import productImage3 from '../assets/third.png';
import productImage4 from '../assets/fourth.png';
// Import product images
// const productImage1 = '/src/assets/d4f9d7594b36a5f7b678518d6df5059adb905a28.png';
// const productImage2 = '/src/assets/ae79ce6b046e3c2bc83ff542c553db10af54629a.png';
// const productImage3 = '/src/assets/3a030033e12bc6bcf63ecf66d1dad867faef3517.png';
// const productImage4 = '/src/assets/06a95442231f12f37f4724880158e07e52854e8f.png';

const ProductSection = () => {
  const { language } = useLanguage();
  const t = translations.products;

  const scrollToForm = () => {
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const products = [
    {
      id: 1,
      name: t.hairOil.name[language],
      image: productImage1,
      benefits: t.hairOil.benefits[language]
    },
    {
      id: 2,
      name: t.hairShampoo.name[language],
      image: productImage2,
      benefits: t.hairShampoo.benefits[language]
    },
    {
      id: 3,
      name: t.hairConditioner.name[language],
      image: productImage3,
      benefits: t.hairConditioner.benefits[language]
    },
    {
      id: 4,
      name: t.hairCapsules.name[language],
      image: productImage4,
      benefits: t.hairCapsules.benefits[language]
    }
  ];

  return (
    <section className=" pt-8 md:pt-16 bg-white">
      <div className="max-w-full px-4 md:px-0 md:mx-20">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">
            {t.sectionTitle[language]} 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8 font-pangram">
            {t.sectionSubtitle[language]}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div>
          {/* Mobile Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-4 pb-4 md:hidden scrollbar-hide snap-x snap-mandatory px-1">
            {products.map((product) => (
              <div key={product.id} className="relative group flex-shrink-0 snap-center w-[280px]">
                {/* Product Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    
                    {/* Product Name Badge */}
                    <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
                      <span className="font-semibold text-base">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 bg-[#f9f6f1] flex-1 flex flex-col">
                    {/* Benefits List */}
                    <div className="space-y-3 mb-6 flex-1">
                      {product.benefits.map((benefit, index) => (
                        <div key={index}>
                          <p className="text-gray-600 text-lg leading-7 font-pangram">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={scrollToForm}
                      className="w-full bg-[#074720] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center leading-tight flex-shrink-0"
                    >
                      {t.cta[language]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                {/* Product Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                    
                    {/* Product Name Badge */}
                    <div className="absolute top-4 left-4 bg-green-800/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/30">
                      <span className="font-semibold text-base">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 bg-[#f9f6f1] flex-1 flex flex-col">
                    {/* Benefits List */}
                    <div className="space-y-3 mb-6 flex-1">
                      {product.benefits.map((benefit, index) => (
                        <div key={index}>
                          <p className="text-gray-600 text-lg leading-7 font-pangram">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={scrollToForm}
                      className="font-pangram w-full bg-[#074720] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm flex items-center justify-center leading-tight flex-shrink-0"
                    >
                      {t.cta[language]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;