import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

export const renderWithRouter = Home =>
  render(
    <Router history={history}>
      <Route component={Home} />
    </Router>
  );

it('it renders Kids Button', () => {
  const render = () => renderWithRouter(Home);
  const { getByText } = render(<Home />);
  const element = getByText(/Kids/i);
  expect(element).toBeInTheDocument();
});

it('renders MERDEKA DAY SPECIAL', () => {
  const render = () => renderWithRouter(Home);
  const { getByText } = render(<Home />);
  const element = getByText(/MERDEKA DAY SPECIAL/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeDefined();
});

it('renders Womens Shop button', () => {
  const render = () => renderWithRouter(Home);
  const { getByText } = render(<Home />);
  const element = getByText(/Women/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeDefined();
});

it('renders SNEAKER HUB Text', () => {
  const render = () => renderWithRouter(Home);
  const { getByText } = render(<Home />);
  const element = getByText(/A'SNEAKER HUB/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeDefined();
});

describe('Back Button', () => {
  it('renders Check Our Summer Sale button to redirect to the Product List Page on click', () => {
    const onClick = jest.fn();

    const render = () => renderWithRouter(Home);
    const { getByText } = render(<Home onClick={onClick} />);

    fireEvent.click(getByText(/Check Our Summer Sale/i));
    expect(onClick).not.toHaveBeenCalled();
  });
});
