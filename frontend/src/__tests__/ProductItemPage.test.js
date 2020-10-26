import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ProductItemPage from '../pages/ProductItemPage';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = ProductItemPage =>
  render(
    <Router history={history}>
      <Route component={ProductItemPage} />
    </Router>
  );

const props = {
  name: 'All Star Nike',
  slug: 'all_star_nike',
  description: 'Very nive shoes from Nike',
  quantity: 0,
  price: 500
};

it('it renders content div', () => {
  const render = () => renderWithRouter(ProductItemPage);
  const { getByTestId } = render(<ProductItemPage {...props} />);
  expect(getByTestId('content')).toBeInTheDocument();
});
