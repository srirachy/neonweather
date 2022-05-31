import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders daily forecast component', async () => {
  render(<App />);
  const fcElmt = screen.getByText(/daily forecast/i);
  expect(fcElmt).toBeInTheDocument();
});
