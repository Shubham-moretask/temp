// import React from "react";
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import bottle from "../assets/better.png";
// import Tablelogo from "../assets/tablelogo.png";
// import CompTable from "../assets/Comparison.png";

// const Check = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z" fill="#074720" />
//     </svg>
// );

// const Cross = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <path d="M20.7075 12.7075L17.4138 16L20.7075 19.2925C20.8004 19.3854 20.8741 19.4957 20.9244 19.6171C20.9747 19.7385 21.0006 19.8686 21.0006 20C21.0006 20.1314 20.9747 20.2615 20.9244 20.3829C20.8741 20.5043 20.8004 20.6146 20.7075 20.7075C20.6146 20.8004 20.5043 20.8741 20.3829 20.9244C20.2615 20.9747 20.1314 21.0006 20 21.0006C19.8686 21.0006 19.7385 20.9747 19.6171 20.9244C19.4957 20.8741 19.3854 20.8004 19.2925 20.7075L16 17.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L14.5863 16L11.2925 12.7075C11.1049 12.5199 10.9994 12.2654 10.9994 12C10.9994 11.7346 11.1049 11.4801 11.2925 11.2925C11.4801 11.1049 11.7346 10.9994 12 10.9994C12.2654 10.9994 12.5199 11.1049 12.7075 11.2925L16 14.5863L19.2925 11.2925C19.3854 11.1996 19.4957 11.1259 19.6171 11.0756C19.7385 11.0253 19.8686 10.9994 20 10.9994C20.1314 10.9994 20.2615 11.0253 20.3829 11.0756C20.5043 11.1259 20.6146 11.1996 20.7075 11.2925C20.8004 11.3854 20.8741 11.4957 20.9244 11.6171C20.9747 11.7385 21.0006 11.8686 21.0006 12C21.0006 12.1314 20.9747 12.2615 20.9244 12.3829C20.8741 12.5043 20.8004 12.6146 20.7075 12.7075ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="black" />
//     </svg>
// );

// const ComparisonRow = ({ text }) => (
//     <div className="grid grid-cols-[1fr_56px_56px] items-center gap-20 px-6 py-4 font-medium text-sm">
//         <p className="text-sm text-[#1D1D1F]">{text}</p>
//         <div className="flex justify-center"><Check /></div>
//         <div className="flex justify-center"><Cross /></div>
//     </div>
// );

// const PrakrityaBetter = () => {
//     const { language } = useLanguage();
//     const t = translations.better;

//     const FEATURES = [
//         t.features.ayurvedic[language],
//         t.features.noChemicals[language],
//         t.features.reducesHairfall[language],
//         t.features.gentle[language],
//         t.features.suitable[language],
//     ];

//     return (
//         <section className="bg-white ">
//             {/* top thin blue rule + heading */}
//             <div className="max-w-full   px-4 md:px-0 md:mx-20 ">
//                 <h2 className="text-left md:text-center text-3xl md:text-4xl font-semibold text-[#1D1D1F] mb-16">
//                     {t.title[language]}
//                 </h2>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8">
//                     {/* LEFT: product/ingredients card */}
//                     <div className="relative  aspect-[4/3] md:aspect-auto bg-white">
//                         {/* main composed image */}
//                         <img
//                             src={bottle}
//                             alt="Prakritya bottle and ingredients"
//                             className="absolute inset-0 w-full h-full object-contain border rounded-2xl border-gray-200"
//                         />

//                     </div>





//                     {/* RIGHT: comparison table */}

//                     <div className="inner-section relative">
//                         <div className="">
//                             <div className="flex justify-end items-center gap-6">
//                                 <img
//                                     src={Tablelogo}
//                                     alt="Prakritya Logo"
//                                 />
//                                 <div className="text-sm font-medium text-[#181D27] ">{t.others[language]}</div>
//                             </div>
//                         </div>

//                         <div className="rounded-2xl border border-gray-200 bg-white shadow-sm ">




//                             {/* rows */}
//                             <div className="mt-1">
//                                 {FEATURES.map((f, i) => (
//                                     <React.Fragment key={i}>
//                                         <ComparisonRow text={f} />
//                                         {i < FEATURES.length - 1 && (
//                                             <div className="h-px bg-gray-100 mx-4" />
//                                         )}
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PrakrityaBetter;


import React from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import bottle from "../assets/better.png";
import Tablelogo from "../assets/Tablelogo.png";
import CompTable from "../assets/Comparison.png";

const Check = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z" fill="#074720" />
    </svg>
);

const Cross = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 32 32" fill="none">
        <path d="M20.7075 12.7075L17.4138 16L20.7075 19.2925C20.8004 19.3854 20.8741 19.4957 20.9244 19.6171C20.9747 19.7385 21.0006 19.8686 21.0006 20C21.0006 20.1314 20.9747 20.2615 20.9244 20.3829C20.8741 20.5043 20.8004 20.6146 20.7075 20.7075C20.6146 20.8004 20.5043 20.8741 20.3829 20.9244C20.2615 20.9747 20.1314 21.0006 20 21.0006C19.8686 21.0006 19.7385 20.9747 19.6171 20.9244C19.4957 20.8741 19.3854 20.8004 19.2925 20.7075L16 17.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L14.5863 16L11.2925 12.7075C11.1049 12.5199 10.9994 12.2654 10.9994 12C10.9994 11.7346 11.1049 11.4801 11.2925 11.2925C11.4801 11.1049 11.7346 10.9994 12 10.9994C12.2654 10.9994 12.5199 11.1049 12.7075 11.2925L16 14.5863L19.2925 11.2925C19.3854 11.1996 19.4957 11.1259 19.6171 11.0756C19.7385 11.0253 19.8686 10.9994 20 10.9994C20.1314 10.9994 20.2615 11.0253 20.3829 11.0756C20.5043 11.1259 20.6146 11.1996 20.7075 11.2925C20.8004 11.3854 20.8741 11.4957 20.9244 11.6171C20.9747 11.7385 21.0006 11.8686 21.0006 12C21.0006 12.1314 20.9747 12.2615 20.9244 12.3829C20.8741 12.5043 20.8004 12.6146 20.7075 12.7075ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="black" />
    </svg>
);

const ComparisonRow = ({ text }) => (
    <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_56px_56px] items-center gap-20 sm:gap-8 lg:gap-20 px-3 sm:px-6 py-3 sm:py-4 font-medium">
        <p className="text-xs sm:text-sm text-[#181D27] leading-tight">{text}</p>
        <div className="flex justify-center w-8 sm:w-14">
            <div className="w-6 h-6 sm:w-8 sm:h-8">
                <Check />
            </div>
        </div>
        <div className="flex justify-center w-8 sm:w-14">
            <div className="w-6 h-6 sm:w-8 sm:h-8">
                <Cross />
            </div>
        </div>
    </div>
);

const PrakrityaBetter = () => {
    const { language } = useLanguage();
    const t = translations.better;

    const FEATURES = [
        t.features.ayurvedic[language],
        t.features.noChemicals[language],
        t.features.reducesHairfall[language],
        t.features.gentle[language],
        t.features.suitable[language],
    ];

    return (
        <section className="bg-white ">
            {/* top thin blue rule + heading */}
            <div className="max-w-full   px-4 md:px-0 md:mx-20 ">
                <h2 className="text-left md:text-center text-3xl md:text-4xl font-semibold text-[#1D1D1F] ">
                    {t.title[language]}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
                    {/* LEFT: product/ingredients card */}
                    <div className="relative  aspect-[4/3] md:aspect-auto bg-white">
                        {/* main composed image */}
                        <img
                            src={bottle}
                            alt="Prakritya bottle and ingredients"
                            className="absolute inset-0 w-full h-full object-contain border rounded-2xl border-gray-200"
                        />

                    </div>

                    {/* RIGHT: comparison table */}
                    <div className="inner-section relative">
                        {/* Comparison table header - responsive */}
                        <div className="">
                            <div className="flex justify-end items-center gap-4 sm:gap-6">
                                <img
                                    src={Tablelogo}
                                    alt="Prakritya Logo"
                                    className="w-28 h-12  sm:w-auto sm:h-auto"
                                />
                                <div className="text-xs sm:text-sm font-medium text-[#181D27]">{t.others[language]}</div>
                            </div>
                        </div>

                        {/* Responsive comparison table */}
                        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                            {/* Table rows - responsive */}
                            <div className="divide-y divide-gray-100">
                                {FEATURES.map((f, i) => (
                                    <ComparisonRow key={i} text={f} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrakrityaBetter;
