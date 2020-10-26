import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ProductListPage from '../pages/ProductListPage';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = ProductListPage =>
  render(
    <Router history={history}>
      <Route component={ProductListPage} />
    </Router>
  );

it('it renders Sport Inspired, Runway Finished header', () => {
  const render = () => renderWithRouter(ProductListPage);
  const { getByText } = render(<ProductListPage />);
  const element = getByText(/Sport Inspired, Runway Finished/i);
  expect(element).toBeInTheDocument();
});

it('it renders The Nike Challenge header', () => {
  const render = () => renderWithRouter(ProductListPage);
  const { getByText } = render(<ProductListPage />);
  const element = getByText(/The Nike Challenge/i);
  expect(element).toBeInTheDocument();
});
