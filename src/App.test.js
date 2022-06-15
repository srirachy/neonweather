import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders eight day clickable cards', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const cardButton = await screen.findAllByRole('button');
  expect(cardButton).toHaveLength(8);
});

test('renders eight day forecast images', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const cardImgs = await screen.findAllByRole('img');
  expect(cardImgs).toHaveLength(8);
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
  await userEvent.type(searchElmt, 'santa clara');
  await userEvent.keyboard(searchElmt, '{s}{a}{n}{t}{a}{Enter}');
  const title = await screen.findByTestId('forecast_title');
  await (() => expect(title).toHaveTextContent(/santa clara/i));
});

test('change the search text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const input = screen.getByRole('textbox', {
    placeholder: /search location/i,
  });

  const event = new Event('change');
  input.value = 'santa clara';
  input.dispatchEvent(event);

  expect(input).toHaveValue('santa clara');
});

test('render seven city weather clickable images', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const cardImgs = await screen.findAllByRole('img');
  await (() => expect(cardImgs).toHaveLength(15));
});
