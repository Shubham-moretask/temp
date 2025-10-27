import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import threeMenImage from '../assets/6812653a0a9d254564e41b4d05cb749318daaa6a.png';

const RealResultsSection = () => {
  const { language } = useLanguage();
  const t = translations.realResults;
  
  return (
    <section className="">
      <div className="max-w-full px-4 md:px-0 md:ml-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 pt-8 md:pt-0 md:mb-12 ">
            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-4">
              <h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold text-[#181d27] leading-tight">
                {t.title[language]}
              </h2>
              <p className="text-base lg:text-xl text-[#535862] leading-6 lg:leading-7 ">
                {t.subtitle[language]}
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                {/* Stat 1 */}
                <div className="text-left">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-2">
                    {t.stats.stat1.value[language]}
                  </div>
                  <p className="text-sm lg:text-lg text-[#181D27] font-semibold">
                    {t.stats.stat1.label[language]}
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-left">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-2">
                    {t.stats.stat2.value[language]}
                  </div>
                  <p className="text-sm lg:text-lg text-[#181D27] font-semibold">
                    {t.stats.stat2.label[language]}
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-left">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800">{t.stats.stat3.value[language]}</span>
                    <span className="text-xl lg:text-2xl font-semibold text-gray-700 ml-2">{t.stats.stat3.unit[language]}</span>
                  </div>
                  <p className="text-sm lg:text-lg text-[#181D27] font-semibold">
                    {t.stats.stat3.label[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-full">
              <img 
                src={threeMenImage} 
                alt="Three men showcasing hair care results" 
                className="w-full h-full object-contain  sm:object-contain sm:object-bottom md:object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealResultsSection