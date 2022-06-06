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
  userEvent.click(btnElmtOne);
  const detailElmtOne = await screen.findByTestId('button_0_detail');
  expect(detailElmtOne).toBeInTheDocument();

  const btnElmtTwo = await screen.findByTestId('button_1');
  userEvent.click(btnElmtTwo);
  // const detailElmtTwo = await screen.findByTestId('button_1_detail');
  expect(detailElmtOne).toHaveAttribute(
    'data-testid',
    'button_1_detail',
  );
  expect(detailElmtOne).not.toHaveAttribute(
    'data-testid',
    'button_0_detail',
  );
});
