import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

// Import ingredient images
import amlaImage from '../assets/2d4f4e0ee8f9b6a8fd851ce2a25dd85286c9414d.png'
import rosemaryImage from '../assets/rosmary.png'
import bhringrajImage from '../assets/7d8518dd1bf9f3a4a08c9618bfda5a8e8db1c8fe.png'
import aloeVeraImage from '../assets/6ac74abc6ca69a8fd38ef1f139ab53888b375d67.png'
import methiDanaImage from '../assets/dc8e8e747b335c0d8dd38384ebc23563cc7b4908.png'
import walnutImage from '../assets/730b7ddd13402e5dfbb938a7c4e809f4b0292dd5.png'
import brahmiImage from '../assets/62b3ebc7bbf2a2e8eeaca3597fad35d5f5725aea.png'
import almondsImage from '../assets/a5d15a0b752c7fca7636710b1338752afd4a3f2b.png'
import sheaButterImage from '../assets/c63249b5b602aa34a2ab1cec28328b5f54d6ff01.png'

const AyurvedicIngredientsSection = () => {
  const { language } = useLanguage();
  const t = translations.ingredients;

  const ingredients = [
    {
      name: t.items.amla.name[language],
      description: t.items.amla.description[language],
      image: amlaImage
    },
    {
      name: t.items.rosemary.name[language],
      description: t.items.rosemary.description[language],
      image: rosemaryImage
    },
    {
      name: t.items.bhringraj.name[language],
      description: t.items.bhringraj.description[language],
      image: bhringrajImage
    },
    {
      name: t.items.aloeVera.name[language],
      description: t.items.aloeVera.description[language],
      image: aloeVeraImage
    },
    {
      name: t.items.methiDana.name[language],
      description: t.items.methiDana.description[language],
      image: methiDanaImage
    },
    {
      name: t.items.walnut.name[language],
      description: t.items.walnut.description[language],
      image: walnutImage
    },
    {
      name: t.items.brahmi.name[language],
      description: t.items.brahmi.description[language],
      image: brahmiImage
    },
    {
      name: t.items.almonds.name[language],
      description: t.items.almonds.description[language],
      image: almondsImage
    },
    {
      name: t.items.sheaButter.name[language],
      description: t.items.sheaButter.description[language],
      image: sheaButterImage
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-full mx-auto px-4 md:px-0 md:mx-20  ">
        {/* Section Header */}
        <div className="text-left  mb-16">
          <h2 className="text-4xl md:t4xt-5xl font-bold text-gray-900 ">
            {t.title[language]}
          </h2>
         
        </div>

        {/* Ingredients Grid - 3 items per row */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg   overflow-hidden md:overflow-visible  flex flex-col  max-w-full "
            >
              {/* Ingredient Image - Responsive positioning */}
              {/* Mobile: Bottom center, Desktop: Top right */}
              <div className="absolute bottom-2  left-1/2 transform -translate-x-1/2 w-40 h-28 md:top-[-44px] md:right-[-22px] md:left-auto md:bottom-auto md:transform-none md:w-40 md:h-28 z-50  ">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="w-full h-full object-cover object-center "
                />
              </div>

              {/* Content - Positioned on left side */}
              <div className="p-6 py-16 md:py-12 flex flex-col justify-center flex-grow relative z-20">
                <div className="max-w-full ">
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 leading-tight">
                    {ingredient.name}
                  </h3>
                  <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-16 md:mb-0">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AyurvedicIngredientsSection