import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from '../components/ProductCard';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = ProductCard =>
  render(
    <Router history={history}>
      <Route component={ProductCard} />
    </Router>
  );

const props = {
  name: 'All Star Nike',
  slug: 'all_star_nike',
  description: 'Very nive shoes from Nike',
  quantity: 0,
  price: 500
};

it('it renders the game Header', () => {
  const render = () => renderWithRouter(ProductCard);
  const { getByText } = render(<ProductCard {...props} />);
  expect(getByText(/Item:/i)).toBeInTheDocument();
});

it('it renders View Item Details button', () => {
  const render = () => renderWithRouter(ProductCard);
  const { getByText } = render(<ProductCard {...props} />);
  const element = getByText(/View Item Details/i);
  expect(element).toBeInTheDocument();
});

describe('Back Button', () => {
  it('renders View Item Details button to redirect to the Product Item Page on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(ProductCard);
    const { getByText } = render(<ProductCard onClick={onClick} {...props} />);

    fireEvent.click(getByText(/View Item Details/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
