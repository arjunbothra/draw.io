import { useState } from "react";
import { Icons } from "../icons";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const faqs = [
        { q: "Is this really free?", a: "Yes! The core drawing engine is open source. You only pay for cloud storage and team features." },
        { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption for all cloud-stored diagrams. Local files never leave your device." },
        { q: "Can I export to React code?", a: "Yes, our AI engine can convert your wireframes into Tailwind + React code instantly." },
        { q: "Do you support self-hosting?", a: "Yes, check our GitHub repository for Docker instructions." }
    ];

    return (
        <section className="py-40 bg-zinc-950 border-t border-zinc-900/50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white font-display mb-6">Frequently Asked Questions</h2>
                    <p className="text-xl text-zinc-400">Everything you need to know about the product and billing.</p>
                </div>
                <div className="space-y-5">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-zinc-800 rounded-2xl bg-zinc-900/30 overflow-hidden transition-all hover:border-zinc-700">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.q}</span>
                                <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                    <Icons.Plus className="w-6 h-6 text-zinc-500" />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="p-8 pt-0 text-lg text-zinc-400 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};