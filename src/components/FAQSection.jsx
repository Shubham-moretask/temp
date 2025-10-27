import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

// const ChevronUp=<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
//   <path d="M13 7L7 1L1 7" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>



// const ChevronDown=
// <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
//   <path d="M1 1L7 7L13 1" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

const faqs = [
  {
    question: "How soon will I see results?",
    answer:
      "You'll start noticing visible difference in about 6 weeks of consistent use.",
  },
  {
    question: "Is it safe for all hair types?",
    answer:
      "Yes. All Prakrtiya products are made with natural herbs suitable for all hair types.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Our range is 100% Ayurvedic and free from harmful chemicals.",
  },
  {
    question: "Can I buy individual products?",
    answer:
      " Yes. You can purchase the oil, shampoo, conditioner, or capsules separately — or as a combo for best results.",
  },
  {
    question: "How will I get my product?",
    answer:
      "Once you place a request, our team will confirm your order and deliver within 4–6 days."
  },
];

const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t.questions.results.question[language],
      answer: t.questions.results.answer[language],
    },
    {
      question: t.questions.safe.question[language],
      answer: t.questions.safe.answer[language],
    },
    {
      question: t.questions.sideEffects.question[language],
      answer: t.questions.sideEffects.answer[language],
    },
    {
      question: t.questions.individual.question[language],
      answer: t.questions.individual.answer[language],
    },
    {
      question: t.questions.delivery.question[language],
      answer: t.questions.delivery.answer[language],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white  h-full px-4 md:px-20 py-16  text-[#181D27]">
      <div className="max-w-full ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold  text-center mb-16">
          {t.title[language]}
        </h2>

        {/* FAQ list */}
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl  font-medium text-[#181D27] font-pangram">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-1 text-[#535862] text-base font-normal font-pangram">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
