import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What is an example of a dropdown question?",
      answer: "A dropdown question allows users to select one answer from a list, such as 'What is your favorite color?' with options like 'Red', 'Blue', 'Green'."
    },
    {
      question: "Are drop-down menus bad for SEO?",
      answer: "Dropdown menus themselves aren't bad for SEO if implemented correctly. Ensure that navigation links in dropdowns are accessible to search engines."
    },
    {
      question: "What is dropdown choices?",
      answer: "Dropdown choices refer to the options presented in a dropdown menu or list from which a user can select."
    },
    {
      question: "What is drop-down list example?",
      answer: "An example of a drop-down list is a menu on a website where users select their country of residence from a list of options."
    },
    {
      question: "What is drop down in questionnaire?",
      answer: "In a questionnaire, a drop-down allows respondents to choose answers from a list of predefined options, making data collection easier."
    }
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4 border rounded-lg overflow-hidden">
          <button
            className="w-full text-left py-3 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={() => handleAccordionClick(index)}
          >
            <span className="font-medium">{item.question}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
