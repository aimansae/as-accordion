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
    <div data-testid="accordion-component" className="main-div">
      <h1 className=" main-heading ">Read FAQ:</h1>
      {questions.map((question, i) => (
        <div key={i}>
          <div className="question-container ">
            <button
              onClick={() => showAnswer(i)}
              aria-expanded={openAnswer === i ? 'true' : 'false'}>
              <div className="flex items-center">
                {openAnswer === i ? (
                  <GoChevronDown data-testid="arrow-down" className="icon" />
                ) : (
                  <GoChevronRight data-testid="arrow-right" className="icon" />
                )}

                <h2 className={openAnswer === i ? 'font-bold' : ''}>{question.question}</h2>
              </div>
            </button>
          </div>
          <Collapse
            data-testid="collapse"
            isOpened={openAnswer === i}
            className="transition-height">
            <div className="answer-container">
              <h3>{question.answer}</h3>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
