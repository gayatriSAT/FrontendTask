import React, { useState } from "react";

const faqs = [
  {
    question: "What Makes Talkish Different From Other Voicebots?",
    answer:
      "Talkish offers full customization of its voice and conversational flows, making it highly adaptable to your brand’s voice. Additionally, it uses AI-powered intelligence to deliver more natural, human-like conversations.",
  },
  {
    question: "Can I Change The Voice Of The Talkish To Match My Brand?",
    answer:
      "Yes, Talkish allows full voice customization to align with your brand's identity and tone.",
  },
  {
    question: "Does Talkish Support Multiple Languages?",
    answer:
      "Absolutely! Talkish supports multiple languages, enabling global customer interaction.",
  },
  {
    question: "Is Talkish Suitable for Small Businesses?",
    answer:
      "Yes, it's built with scalability in mind—perfect for startups to large enterprises.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left p-4 font-semibold bg-white text-gray-800 hover:bg-gray-50 flex justify-between items-center"
      >
        {faq.question}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-50 px-4 py-3 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-40">
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="mt-4 md:mt-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Frequently <span className="text-dark-pink">Asked</span>{" "}
            Question
          </h2>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;