import { useState } from 'react';
import { questions } from './Questions';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { Collapse } from 'react-collapse';

const Accordion = () => {
  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const showAnswer = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <div className="font-roboto h-[550px] w-[550px] items-center p-2">
      <h1 className="border border-gray-300 bg-gray-300 p-2 text-center text-2xl">Read FAQ:</h1>

      {questions.map((question, i) => (
        <>
          <div key={i} className="flex items-center border border-gray-300 bg-gray-100 px-4 py-4">
            {openAnswer === i ? (
              <GoChevronDown
                className=" mr-2 transform cursor-pointer text-xl text-gray-500 transition-transform duration-300 hover:scale-125"
                onClick={() => showAnswer(i)}
              />
            ) : (
              <GoChevronRight
                className="mr-2 transform cursor-pointer text-xl text-gray-500 transition-transform duration-300 hover:scale-125"
                onClick={() => showAnswer(i)}
              />
            )}

            <h2 className={openAnswer === i ? 'font-bold' : ''}>{question.question}</h2>
          </div>
          <Collapse isOpened={openAnswer === i} className="transition-height">
            <div className="border border-gray-300 px-4 py-4">
              <h3>{question.answer}</h3>
            </div>
          </Collapse>
        </>
      ))}
    </div>
  );
};

export default Accordion;
