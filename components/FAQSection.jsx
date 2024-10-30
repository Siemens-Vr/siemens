"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-3 ${!isLast && "border-b border-gray-200"}`}>
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-siemens-green focus:ring-opacity-50 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ${
            isOpen ? "text-siemens-green" : "text-gray-400"
          }`}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-2 pr-12 text-base text-gray-700 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isLast={index === faqs.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
