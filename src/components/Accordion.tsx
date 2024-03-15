import { useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';

export type AccordionItem = {
  id: string;
  summary: string;
  details: string;
};

export type AccordionProps = {
  title: string;
  items: AccordionItem[];
};

const Accordion = ({ title, items }: AccordionProps) => {
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [openAnswer, setOpenAnswer] = useState<string | null>(null);

  const showAnswer = (id: string) => {
    setOpenAnswer(openAnswer === id ? null : id);
  };

  return (
    <div data-testid="accordion-component" className="items-center font-roboto">
      <header>
        <h1 className="border border-gray-300 bg-gray-300 p-4 text-center text-2xl font-bold md:mt-8 md:p-2">
          {title}
        </h1>
      </header>
      {items.map((item, i) => (
        <section key={item.id}>
          <div className="flex flex-col justify-between border border-gray-300 bg-gray-100 px-4 py-6 md:p-4">
            <button
              ref={(element: HTMLButtonElement | null) => (buttonsRef.current[i] = element)}
              onClick={() => showAnswer(item.id || '')}
              aria-expanded={openAnswer === item.id ? 'true' : 'false'}>
              <div className="flex items-center gap-2">
                <GoChevronDown
                  className={`transform cursor-pointer text-xl text-gray-500 transition-transform duration-300 hover:scale-125 ${openAnswer === item.id ? 'rotate-[-90deg]' : ''}`}
                />
                <span className={`text-sm ${openAnswer === item.id ? 'text-gray-600' : ''}`}>
                  {item.summary}
                </span>
              </div>
            </button>
          </div>
          <div
            className={`overflow-hidden border-gray-300 bg-white transition-all duration-500 ${
              openAnswer === item.id ? 'max-h-screen' : 'max-h-0'
            }`}>
            <p className="border border-gray-300 p-4 text-sm text-gray-600 ">{item.details}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Accordion;
