import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

// Testimonial images from Figma
import testimonial1 from "../assets/18448a8853ffe6bd7db128f85a669cc36c2fce7b.png";
import testimonial2 from "../assets/b7ce95f82afc919252f274efbe9ba226b77efb9d.png";
import testimonial3 from "../assets/dc4b5a0cb7cd7bfa4d91548f0b7570afca05d096.png";
import testimonial4 from "../assets/733c332f91880fa8bdaca4d0e8f9f7e03c2dd85e.png";
import testimonial5 from "../assets/e4e64be3550b6fa9beda5670629e829691989a86.png";
import testimonial6 from "../assets/7f194baf321f47e935938e5699fb3433590d6eef.png";
import testimonial7 from "../assets/e60ec49c6b1c4aeb417e27e94db7193c8976c1a8.png";

const TestimonialsSection = () => {
    const { language } = useLanguage();
    const t = translations.testimonials;

    const testimonials = [
        {
            img: testimonial1,
            quote: t.items.testimonial1.quote[language],
            author: t.items.testimonial1.author[language],
        },
        {
            img: testimonial2,
            quote: t.items.testimonial2.quote[language],
            author: t.items.testimonial2.author[language],
        },
        {
            img: testimonial4, // This uses the combined before/after image
            quote: t.items.testimonial3.quote[language],
            author: t.items.testimonial3.author[language],
        },
        {
            img: testimonial5, // Before/after image showing hair density improvement
            quote: t.items.testimonial4.quote[language],
            author: t.items.testimonial4.author[language],
        },
        {
            img: testimonial6, // Hair breakage improvement image
            quote: t.items.testimonial5.quote[language],
            author: t.items.testimonial5.author[language],
        },
        {
            img: testimonial7, // Crown area improvement image
            quote: t.items.testimonial6.quote[language],
            author: t.items.testimonial6.author[language],
        },
    ];

    return (
        <section className=" py-16 bg-white ">   {/** px-4 md:px-28 lg:px-24" */}
            <div className="max-w-full  px-4 md:px-0 md:mx-20 ">
                {/* Section title */}
                <h2 className="text-left md:text-center text-3xl md:text-4xl font-bold text-[#181D27] mb-16">
                    {t.title[language]}
                </h2>

                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#F9F6F1] rounded-xl shadow-sm"
                        >
                            {/* Combined Image */}
                            <img
                                src={item.img}
                                alt={`User testimonial ${idx + 1}`}
                                className="rounded-t-xl object-cover w-full h-[180px]"
                            />

                            {/* Quote */}
                            <div className="outer-section bg-[#F9F6F1]" >
                                <div className="inner-container  py-3 px-6 my-12 gap-3">
                                    <p className="text-base text-[#181D27] font-medium leading-snug mb-2">
                                        “{item.quote}”
                                    </p>

                                    {/* Author */}
                                    <p className="text-base text-[#181D27] font-medium mt-auto">
                                        — {item.author}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
