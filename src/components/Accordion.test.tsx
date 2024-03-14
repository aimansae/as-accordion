import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

jest.mock('../constants', () => ({
  questions: [
    { question: 'question 1', answer: 'answer 1' },
    { question: 'question 2', answer: 'answer 2' },
    { question: 'question 3', answer: 'answer 3' },
    { question: 'question 4', answer: 'answer 4' },
    { question: 'question 5', answer: 'answer 5' },
    { question: 'question 6', answer: 'answer 6' }
  ]
}));

const questions = [
  'question 1',
  'question 2',
  'question 3',
  'question 4',
  'question 5',
  'question 6'
];

describe('Accordion', () => {
  describe('Render', () => {
    test('all questions are displayed', async () => {
      render(<Accordion />);

      questions.forEach(async (question) => {
        const getQuestion = screen.getByText(question);
        expect(getQuestion).toBeInTheDocument();

        await userEvent.click(getQuestion);
        expect(getQuestion).toHaveClass('font-bold');
      });
    });

    test('Interactions', async () => {
      render(<Accordion />);

      questions.forEach(async (question, index) => {
        const getQuestion = screen.getByText(question);
        const getAnswer = screen.getByText(`answer ${index + 1}`);

        await userEvent.click(getQuestion);
        expect(getAnswer).toBeInTheDocument();
        expect(getQuestion).toHaveClass('font-bold');
        expect(getQuestion).toHaveClass('transition-all');
      });
    });
  });
});
