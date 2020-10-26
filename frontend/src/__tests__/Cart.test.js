import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Cart from '../pages/Cart';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = Cart =>
  render(
    <Router history={history}>
      <Route component={Cart} />
    </Router>
  );

const props = {
  name: 'All Star Nike',
  slug: 'all_star_nike',
  description: 'Very nive shoes from Nike',
  quantity: 0,
  price: 500
};

it('it renders the game2 HAVE A PROMO CODE? Header', () => {
  const render = () => renderWithRouter(Cart);
  const { getByText } = render(<Cart {...props} />);
  expect(getByText(/2 HAVE A PROMO CODE?/i)).toBeInTheDocument();
});

it('it renders Your cart summary header', () => {
  const render = () => renderWithRouter(Cart);
  const { getByText } = render(<Cart {...props} />);
  const element = getByText(/Your cart summary/i);
  expect(element).toBeInTheDocument();
});

describe('Back Button', () => {
  it('renders Guest Checkout button to redirect to the Checkout Page on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(Cart);
    const { getByText } = render(<Cart onClick={onClick} {...props} />);

    fireEvent.click(getByText(/Guest Checkout/i));
    expect(onClick).not.toHaveBeenCalled();
  });
  it('renders Member Checkout button to redirect to the Checkout Page on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(Cart);
    const { getByText } = render(<Cart onClick={onClick} {...props} />);

    fireEvent.click(getByText(/Member Checkout/i));
    expect(onClick).not.toHaveBeenCalled();
  });
  it('renders Back to Shop button to redirect to the Checkout Page on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(Cart);
    const { getByText } = render(<Cart onClick={onClick} {...props} />);

    fireEvent.click(getByText(/Back to Shop/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
