import React, { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import formlogo from "../assets/formlogo.png";

const ConsultationFormCard = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState({ error: "", success: "" });
    const [loading, setLoading] = useState(false);
    const { language } = useLanguage();
    const t = translations.consultation;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ error: "", success: "" });

        // Validate phone number (10 digits)
        const phoneOk = /^\d{10}$/.test(phone.trim());
        if (name.trim().length < 2) {
            return setStatus({ error: t.nameError[language], success: "" });
        }
        if (!phoneOk) {
            return setStatus({ error: t.phoneError[language], success: "" });
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
                        Name: name.trim(),
                        "Phone Number": "+91" + phone.trim(),
                        Placement: "Middle"
                    }
                })
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            // Pass values up if a handler is provided
            if (typeof onSubmit === "function") {
                await onSubmit({ name: name.trim(), phone: phone.trim() });
            }
            
            setStatus({ error: "", success: t.successMessage[language] });
            setName("");
            setPhone("");
        } catch (err) {
            setStatus({ error: t.errorMessage[language], success: "" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="consultation-form" className="bg-[#F9F6F1] py-16 px-6">
            <div className="max-w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#181D27]">
                    {t.title[language]}
                </h2>

                {/* Card */}
                <div className="mt-16 mx-auto max-w-lg rounded-xl shadow-md border border-black/5 bg-white">
                    <form onSubmit={handleSubmit} className="p-8 md:p-8 rounded-lg">
                        {/* Brand line */}
                        <div className="">
                            <img
                                src={formlogo}
                                alt="Prakritya Logo"
                                className="items-center mx-auto"
                            />



                        </div>


                        <h3 className="mt-5 text-2xl font-semibold text-[#181D27] leading-snug">
                            {t.formTitle[language]}
                        </h3>

                        <p className="mt-2 text-sm text-[#535862] font-pangram">
                            {t.subtitle[language]}
                        </p>

                        {/* Name */}
                        <label className="block text-left mt-6 text-sm font-medium text-[#414651] font-pangram">
                            {t.nameLabel[language]}
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t.namePlaceholder[language]}
                            className="mt-2 w-full rounded-lg border border-[#D5D7DA] px-4 py-3 text-sm outline-none "
                        />

                        {/* Phone */}
                        <label className="block text-left mt-4 text-sm font-medium text-[#414651] font-pangram">
                            {t.phoneLabel[language]}
                        </label>
                        
                        <div className="mt-2 flex bg-white border border-[#D5D7DA] rounded-lg">
                            <div className="flex items-center pl-4 pr-2">
                                <span className="text-gray-900 font-normal">+91</span>
                            </div>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    if (value.length <= 10) {
                                        setPhone(value);
                                    }
                                }}
                                placeholder="1234567890"
                                maxLength="10"
                                className="flex-1 rounded-r-lg px-2 py-3 text-sm outline-none"
                            />
                        </div>

                        {/* Messages */}
                        {status.error ? (
                            <div className="mt-3 text-left text-xs text-red-600">{status.error}</div>
                        ) : null}
                        {status.success ? (
                            <div className="mt-3 text-left text-xs text-green-700">{status.success}</div>
                        ) : null}

                        {/* CTA */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="font-pangram mt-6 w-full  bg-[#074720] text-white py-2.5 px-3.5 rounded-lg text-base font-medium hover:brightness-110 active:brightness-95 disabled:opacity-70"
                        >
                            {loading ? t.submitting[language] : t.submitButton[language]}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ConsultationFormCard;
