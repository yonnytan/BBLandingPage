import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I start using BeatBytes?",
      answer: "Simply download the app from the App Store, create an account, and start streaming your favorite music."
    },
    {
      question: "Is BeatBytes really free?",
      answer: "Yes! BeatBytes is completely free to use. Enjoy over 150 million songs without any cost."
    },
    {
      question: "Can I download songs for offline listening?",
      answer: "Currently, BeatBytes supports streaming. Offline download features are in development."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;