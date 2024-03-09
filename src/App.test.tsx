import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App renders', () => {
  test('Accordion component render correctly', () => {
    render(<App />);

    expect(screen.getByTestId('accordion-component')).toBeInTheDocument();
  });
});
