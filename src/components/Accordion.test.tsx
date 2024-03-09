import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

jest.mock('./Questions', () => ({
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

describe('Home Renders', () => {
  test('all questions are displayed', async () => {
    render(<Accordion />);

    questions.forEach(async (question) => {
      const getQuestion = screen.getByText(question);
      expect(getQuestion).toBeInTheDocument();

      await userEvent.click(getQuestion);
      expect(getQuestion).toHaveClass('font-bold');
      const collapse = screen.getByTestId('collapse');
      await userEvent.click(getQuestion);
      expect(collapse).toHaveClass('transition-height');
    });
  });

  test('Questions become bold when clicked', async () => {
    render(<Accordion />);

    questions.forEach(async (question) => {
      const getQuestion = screen.getByText(question);
      await userEvent.click(getQuestion);
      expect(getQuestion).toHaveClass('font-bold');
    });
  });

  test('Collapse works', async () => {
    render(<Accordion />);

    questions.forEach(async (question) => {
      const getQuestion = screen.getByText(question);
      await userEvent.click(getQuestion);

      const collapse = await screen.getByTestId('collapse');
      expect(collapse).toHaveClass('transition-height');
    });
  });

  test('Arrow is changed if question is clicked', async () => {
    render(<Accordion />);
    questions.forEach(async (question) => {
      const getQuestion = screen.getByText(question);

      await userEvent.click(getQuestion);

      const arrowDown = await screen.getByTestId('arrow-down');
      expect(arrowDown).toBeInTheDocument();

      await userEvent.click(getQuestion);

      const arrowRight = await screen.getByTestId('arrow-right');
      expect(arrowRight).toBeInTheDocument();
    });
  });
});
