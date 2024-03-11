import { useState, KeyboardEvent, useRef } from 'react';
import { questions } from './Questions';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { Collapse } from 'react-collapse';

const Accordion = () => {
  const buttonRef = useRef<Array<HTMLButtonElement | null>>([]);

  const focusButton = (index: number) => {
    if (buttonRef.current[index] !== null) {
      buttonRef.current[index]?.focus();
    }
  };

  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const showAnswer = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      showAnswer(index);
    } else if (e.key === 'ArrowDown' || e.key === 'Tabha') {
      const nextQuestion = (index + 1) % questions.length;
      focusButton(nextQuestion);
    } else if (e.key === 'ArrowUp') {
      const nextQuestion = (index - 1) % questions.length;
      focusButton(nextQuestion);
    }
  };

  return (
    <div data-testid="accordion-component" className="main-div">
      <header>
        <h1 className=" main-heading ">Read FAQ:</h1>
      </header>
      {questions.map((question, i) => (
        <section key={i}>
          <div className="question-container">
            <button
              ref={(element: HTMLButtonElement | null) => (buttonRef.current[i] = element)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              tabIndex={0}
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
        </section>
      ))}
    </div>
  );
};

export default Accordion;
