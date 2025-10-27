// import React, { useRef } from "react";
// import Card from "../assets/Card.png";
// const steps = [
//   {
//     img: Card,
//     title: "Oil Massage (3x a week)",
//     desc:
//       "Apply the Hair Oil to your scalp and massage gently for 10–15 minutes. Leave overnight.",
//   },
//   {
//     img: Card,
//     title: "Cleanse",
//     desc: "Wash off with the Ayurvedic Shampoo.",
//   },
//   {
//     img: Card,
//     title: "Condition",
//     desc:
//       "Use the Conditioner after every wash for smooth, manageable hair.",
//   },
//   {
//     img: Card,
//     title: "Nourish",
//     desc:
//       "Take 2 capsules daily after meals to support healthy hair growth.",
//   },
// ];

// const ArrowLeft = ({ className }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const ArrowRight = ({ className }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );

// const HowToUse = () => {
//   const scrollerRef = useRef(null);

//   const scrollByCards = (dir = 1) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const card = el.querySelector("[data-card]");
//     const amount = card ? card.getBoundingClientRect().width + 24 : 320;
//     el.scrollBy({ left: dir * amount, behavior: "smooth" });
//   };

//   return (
//     <section className="bg-white py-10 md:py-14">
//       <div className="max-w-7xl mx-auto px-5 md:px-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-16 md:mb-16">
//           <h2 className="text-4xl md:text-xl font-bold text-[#181D27]">
//             How to Use the Products
//           </h2>
//           <div className="hidden sm:flex items-center gap-3">
//             <button
//               aria-label="Previous"
//               onClick={() => scrollByCards(-1)}
//               className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//             >
//               <ArrowLeft className="h-5 w-5 text-gray-700" />
//             </button>
//             <button
//               aria-label="Next"
//               onClick={() => scrollByCards(1)}
//               className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//             >
//               <ArrowRight className="h-5 w-5 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Horizontal grid/scroller */}
//         <div
//           ref={scrollerRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
//         >
//           {steps.map((s, i) => (
//             <article
//               key={i}
//               data-card
//               className="min-w-[240px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] snap-start"
//             >
//               {/* Image */}
//               <div className="rounded-xl overflow-hidden shadow-sm border border-black/5">
//                 <img
//                   src={s.img}
//                   alt={s.title}
//                   className=" w-full object-cover block"
//                 />
//               </div>

          
//             </article>
//           ))}
//         </div>

//         {/* Pro Tip */}
//         <p className="mt-6 text-xl text-center text-[#535862]">
//           <span className="font-semibold">Pro Tip:</span>{" "}
//           Stay consistent for 6 weeks to start seeing visible difference in
//           volume and strength.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HowToUse;



import React, { useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

// How to Use Products images from Figma
import oilMassageImg from "../assets/78cc770cecdb71a9b609fcbff8061387eac695b7.png";
import cleanseImg from "../assets/c00e220449ec959e4c4dd8bb8f26b50cb7512b36.png";
import conditionImg1 from "../assets/82e0f1d851188d30e79429e0bc36c66df8ece79d.png";
import conditionImg2 from "../assets/414d739076395220e039a29b443986a7a83496fe.png";
import nourishImg from "../assets/860ec1e9c8cec607c18c8897d9bb9081d415510e.png";

// const steps = [
//   {
//     img: Card,
//     title: "Oil Massage (3x a week)",
//     desc:
//       "Apply the Hair Oil to your scalp and massage gently for 10–15 minutes. Leave overnight.",
//   },
//   {
//     img: Card,
//     title: "Cleanse",
//     desc: "Wash off with the Ayurvedic Shampoo.",
//   },
//   {
//     img: Card,
//     title: "Condition",
//     desc: "Use the Conditioner after every wash for smooth, manageable hair.",
//   },
//   {
//     img: Card,
//     title: "Nourish",
//     desc:
//       "Take 2 capsules daily after meals to support healthy hair growth.",
//   },
// ];

const ArrowLeft = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M15 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowToUse = () => {
  const { language } = useLanguage();
  const t = translations.howToUse;
  const scrollerRef = useRef(null);

  const steps = [
    {
      img: oilMassageImg,
      title: t.steps.oil.title[language],
      desc: t.steps.oil.description[language],
      imgStyle: "object-cover", // Standardized positioning
    },
    {
      img: cleanseImg,
      title: t.steps.cleanse.title[language],
      desc: t.steps.cleanse.description[language],
      imgStyle: "object-cover", // Standardized positioning
    },
    {
      img: conditionImg2,
      title: t.steps.condition.title[language],
      desc: t.steps.condition.description[language],
      backgroundImg: conditionImg1,
      imgStyle: "object-cover", // Standardized positioning
    },
    {
      img: nourishImg,
      title: t.steps.nourish.title[language],
      desc: t.steps.nourish.description[language],
      imgStyle: "object-cover", // Standardized positioning
    },
  ];

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-full   px-4 md:px-0 md:mx-20 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#181D27]">
            {t.title[language]}
          </h2>

          {/* Arrows (visible on desktop, hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scrollByCards(-1)}
              className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCards(1)}
              className="h-9 w-9 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll section */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory pb-2"
        >
          {steps.map((s, i) => (
            <article
              key={i}
              data-card
              className="relative min-w-[300px] sm:min-w-[320px] md:min-w-[350px] lg:w-full h-[504px] rounded-2xl overflow-hidden flex flex-col justify-end p-5 snap-start"
            >
              {/* Background Images */}
              <div className="absolute inset-0 pointer-events-none">
                {s.backgroundImg && (
                  <img 
                    src={s.backgroundImg} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                )}
                <img 
                  src={s.img} 
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full rounded-2xl ${s.imgStyle}`}
                />
              </div>

              {/* Content Overlay */}
              <div className="relative bg-[rgba(7,71,32,0.5)] backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 text-white min-h-[160px] sm:min-h-[192px] flex flex-col justify-between">
                <h3 className="text-lg md:text-2xl font-semibold leading-6 sm:leading-8 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-lg leading-5 sm:leading-7 flex-1 font-pangram">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Arrows at bottom (visible only on mobile) */}
        <div className="flex sm:hidden  gap-4 mt-8">
          <button
            aria-label="Previous"
            onClick={() => scrollByCards(-1)}
            className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByCards(1)}
            className="h-10 w-10 rounded-full bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          >
            <ArrowRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Pro Tip */}
        <p className="mt-8 text-base md:text-xl text-center text-[#535862]">
          <span className="font-semibold">{t.proTip.label[language]}</span>{" "}
          {t.proTip.text[language]}
        </p>
      </div>
    </section>
  );
};

export default HowToUse;
