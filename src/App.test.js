import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Test examples header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Test examples/i);
  expect(header).toBeInTheDocument();
});
