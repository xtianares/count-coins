import React from 'react'
import {render, screen} from '@testing-library/react'

import App from './App';
import Coin from './components/Coin';

test('renders the form', () => {
  render(<App />);
  const formElement = screen.getByRole('textbox');
  expect(formElement).toBeInTheDocument();
});

test('renders the coin with count', () => {
  render(<Coin coinName="Silver Dollar" coinCount="5" />);
  const coin = screen.getByText(/Silver Dollar/i);
  expect(coin).toBeInTheDocument();
});
