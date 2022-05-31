import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders daily forecast component', async () => {
  render(<App />);
  const fcElmt = screen.getByText(/daily forecast/i);
  const sunElmt = await screen.findByText(/sunday/i);
  const monElmt = await screen.findByText(/monday/i);
  const tuesElmt = await screen.findByText(/tuesday/i);
  const wedElmt = await screen.findByText(/wednesday/i);
  const thurElmt = await screen.findByText(/thursday/i);
  const friElmt = await screen.findByText(/friday/i);
  const satElmt = await screen.findByText(/saturday/i);
  expect(fcElmt).toBeInTheDocument();
  expect(sunElmt).toBeInTheDocument();
  expect(monElmt).toBeInTheDocument();
  expect(tuesElmt).toBeInTheDocument();
  expect(wedElmt).toBeInTheDocument();
  expect(thurElmt).toBeInTheDocument();
  expect(friElmt).toBeInTheDocument();
  expect(satElmt).toBeInTheDocument();
});
