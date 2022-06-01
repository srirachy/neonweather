import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { array, objectOf } from 'prop-types';
import App from './App';

test('renders eight day clickable cards', async () => {
  render(<App />);
  expect(await screen.findAllByRole('button')).toHaveLength(8);
});

test('renders eight day forecast images', async () => {
  render(<App />);
  expect(await screen.findAllByRole('img')).toHaveLength(8);
  // const altElmts = await screen.findAllByAltText(
  //   /sky|clouds|rain|thunderstorm|snow|mist/i,
  // );
});

test('when user clicks on a card, the proper output is generated', async () => {
  render(<App />);
  const btnElmtOne = await screen.findByTestId('button_0');
});
