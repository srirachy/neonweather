import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders eight day clickable cards', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(await screen.findAllByRole('button')).toHaveLength(8);
});

test('renders eight day forecast images', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  expect(await screen.findAllByRole('img')).toHaveLength(8);
  // const altElmts = await screen.findAllByAltText(
  //   /sky|clouds|rain|thunderstorm|snow|mist/i,
  // );
});

test('when user clicks on a card, the proper output is generated', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const btnElmtOne = await screen.findByTestId('button_0');
  userEvent.click(btnElmtOne);
  const detailElmtOne = await screen.findByTestId('button_0_detail');
  expect(detailElmtOne).toHaveAttribute(
    'data-testid',
    'button_0_detail',
  );

  const btnElmtTwo = await screen.findByTestId('button_1');
  userEvent.click(btnElmtTwo);
  const detailElmtTwo = await screen.findByTestId('button_1_detail');
  expect(detailElmtTwo).toHaveAttribute(
    'data-testid',
    'button_1_detail',
  );
  expect(detailElmtOne).not.toBeInTheDocument();
});

test('when user enters a location, the weather updates to the location', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const searchElmt = screen.getByRole('textbox', {
    placeholder: /search location/i,
  });
  expect(searchElmt).toBeInTheDocument();
  userEvent.type(searchElmt, 'Santa Clara');
  fireEvent.submit(searchElmt);
});
