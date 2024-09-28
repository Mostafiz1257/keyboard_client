import { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Define the type for each accordion item
type AccordionItemType = {
  title: string;
  content: string;
};

// Accordion Item Component
const AccordionItem = ({ title, content }: AccordionItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Proper typing for the ref

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

// Main Accordion Component with internal accordionItems
const Accordion = () => {
  // Example accordion items, kept inside the Accordion component itself
  const accordionItems: AccordionItemType[] = [
    {
      title: "What are the benefits of mechanical keyboards?",
      content:
        "Mechanical keyboards offer a more durable build, better typing experience, customizable keys, and often faster response times.",
    },
    {
      title: "What is a mechanical keyboard?",
      content:
        "A mechanical keyboard uses individual mechanical switches for each key, providing superior tactile feedback compared to other types of keyboards.",
    },
    {
      title: "What are the benefits of mechanical keyboards?",
      content:
        "Mechanical keyboards offer a more durable build, better typing experience, customizable keys, and often faster response times.",
    },
    {
      title: "Are mechanical keyboards louder?",
      content:
        "Yes, mechanical keyboards can be louder than membrane keyboards, but many switch types offer quieter options like Cherry MX Silent or Gateron Silent switches.",
    },
    {
      title: "What are the benefits of mechanical keyboards?",
      content:
        "Mechanical keyboards offer a more durable build, better typing experience, customizable keys, and often faster response times.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden"
    >
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
