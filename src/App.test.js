import { render, screen } from '@testing-library/react';
import RandomQuote from './App';
import App from './App';

test('renders learn react link', () => {
  render(<RandomQuote />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
