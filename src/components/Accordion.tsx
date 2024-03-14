import { useState, useRef } from 'react';
import { questions } from '../constants';
import { GoChevronDown } from 'react-icons/go';

const Accordion = () => {
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const showAnswer = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
    console.log('arrow clicked');
  };

  return (
    <div
      data-testid="accordion-component"
      className="h-[550px] items-center font-roboto sm:w-full md:w-[550px]">
      <header>
        <h1 className="border border-gray-300 bg-gray-300 p-4 text-center text-2xl font-bold md:mt-8 md:p-2">
          FAQs:
        </h1>
      </header>
      {questions.map((question, i) => (
        <section key={i}>
          <div className="flex flex-col justify-between border border-gray-300 bg-gray-100 px-4 py-6 md:p-4">
            <button
              ref={(element: HTMLButtonElement | null) => (buttonsRef.current[i] = element)}
              tabIndex={0}
              onClick={() => showAnswer(i)}
              aria-expanded={openAnswer === i ? 'true' : 'false'}>
              <div className="flex items-center">
                <GoChevronDown
                  className={`mr-2 transform cursor-pointer text-xl text-gray-500 transition-transform duration-300 hover:scale-125 ${openAnswer === i ? 'rotate-[272deg]' : ''}`}
                />
                <h2 className={` text-sm ${openAnswer === i ? 'font-bold' : ''}`}>
                  {question.question}
                </h2>
              </div>
            </button>
          </div>
          <div
            className={`overflow-hidden border-gray-300  bg-white transition-all duration-500 ${
              openAnswer === i ? 'max-h-screen' : 'max-h-0'
            }`}>
            <h3 className="border border-gray-300 p-4 px-4 text-sm text-slate-700 ">
              {question.answer}
            </h3>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Accordion;
