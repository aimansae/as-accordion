import { v4 as uuid } from 'uuid';

export const questions = [
  {
    id: uuid(),
    summary: 'What is Tailwind CSS?',
    details:
      'Tailwind CSS is a utility-first CSS framework for building custom designs without having to leave your HTML.'
  },
  {
    id: uuid(),
    summary: 'How does Tailwind CSS work?',
    details:
      'Tailwind CSS provides a set of utility classes that you can apply directly to your HTML elements to style them.'
  },
  {
    id: uuid(),
    summary: 'Why should I use Tailwind CSS?',
    details:
      'Tailwind CSS allows for rapid development and customization of designs by providing a comprehensive set of utility classes.'
  },
  {
    id: uuid(),
    summary: 'Is Tailwind CSS mobile-friendly?',
    details:
      'Yes, Tailwind CSS is mobile-first by default and provides responsive utility classes for building mobile-friendly layouts.'
  },
  {
    id: uuid(),
    summary: 'Can I customize Tailwind CSS?',
    details:
      'Yes, Tailwind CSS is highly customizable. You can configure colors, spacing, typography, and more using its configuration file.'
  },
  {
    id: uuid(),
    summary: 'Is Tailwind CSS easy to learn?',
    details:
      "Tailwind CSS is relatively easy to learn, especially if you're already familiar with CSS and HTML."
  },
  {
    id: uuid(),
    summary: 'Is Tailwind CSS mobile-friendly?',
    details:
      'Yes, Tailwind CSS is mobile-first by default and provides responsive utility classes for building mobile-friendly layouts.'
  }
];


console.log(questions)