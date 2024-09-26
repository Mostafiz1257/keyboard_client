import { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center p-4 text-lg font-semibold text-left transition-all duration-300 ease-in-out rounded-lg
          ${isOpen ? 'bg-yellow-100 text-gray-800' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
      >
        <span className="font-serif">{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-yellow-500 transition-transform duration-300" />
        ) : (
          <FaChevronDown className="text-yellow-500 transition-transform duration-300" />
        )}
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-4 text-gray-700 bg-gray-50 rounded-b-lg">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
