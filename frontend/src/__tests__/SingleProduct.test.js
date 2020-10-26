import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import SingleProduct from '../components/SingleProduct';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = SingleProduct =>
  render(
    <Router history={history}>
      <Route component={SingleProduct} />
    </Router>
  );

const props = {
  name: 'All Star Nike',
  slug: 'all_star_nike',
  description: 'Very nive shoes from Nike',
  quantity: 0,
  price: 500
};

it('it renders Go Back to Shop button', () => {
  const render = () => renderWithRouter(SingleProduct);
  const { getByText, debug } = render(<SingleProduct {...props} />);
  debug();
  expect(getByText(/Go Back to Shop/i)).toBeInTheDocument();
});

it('it renders FREE Shipping on this item! header', () => {
  const render = () => renderWithRouter(SingleProduct);
  const { getByText } = render(<SingleProduct {...props} />);
  const element = getByText(/FREE Shipping on this item!/i);
  expect(element).toBeInTheDocument();
});

it('it renders Aerial Zoom for display', () => {
  const render = () => renderWithRouter(SingleProduct);
  const { getByText } = render(<SingleProduct {...props} />);
  const element = getByText(/Aerial Zoom/i);
  expect(element).toBeInTheDocument();
});
