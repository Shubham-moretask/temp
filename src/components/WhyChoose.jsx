import React from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

// Figma extracted images
import naturalImage from "../assets/Feature image.png";
import resultsImage from "../assets/visual.png";
import consultationImage from "../assets/consult.png";
import madeInIndiaImage from "../assets/ayu.jpg";

const WhyChoose = () => {
  const { language } = useLanguage();
  const t = translations.whyChoose;

  const items = [
    {
      img: naturalImage,
      title: t.features.natural.title[language],
      desc: t.features.natural.description[language],
    },
    {
      img: resultsImage,
      title: t.features.results.title[language],
      desc: t.features.results.description[language],
    },
    {
      img: consultationImage,
      title: t.features.consultation.title[language],
      desc: t.features.consultation.description[language],
    },
    {
      img: madeInIndiaImage,
      title: t.features.madeInIndia.title[language],
      desc: t.features.madeInIndia.description[language],
    },
  ];

  return (
    <section className="bg-[#074720] text-white py-12 md:py-16">
      <div className="max-w-full  px-4 md:px-0 md:mx-20 ">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          {t.title[language]}
        </h2>

        {/* Mobile Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-8 pb-4 sm:hidden scrollbar-hide snap-x snap-mandatory">
          {items.map((item, i) => (
            <article key={i} className="flex flex-col flex-shrink-0 w-72 snap-center">
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[296px] h-[270px] object-cover block"
                />
              </div>

              {/* Copy */}
              <h3 className="mt-6 text-lg font-semibold text-[#FBF5F1]">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-[#FBF5F1] font-normal leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <article key={i} className="flex flex-col">
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover block"
                />
              </div>

              {/* Copy */}
              <h3 className="mt-8 text-lg md:text-lg font-semibold text-[#FBF5F1]">
                {item.title}
              </h3>
              <p className="mt-1 text-base text-[#FBF5F1] font-normal leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
