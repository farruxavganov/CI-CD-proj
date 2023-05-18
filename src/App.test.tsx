import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const ele = screen.getByText(/0/i)
  expect(ele).toBeInTheDocument();
});