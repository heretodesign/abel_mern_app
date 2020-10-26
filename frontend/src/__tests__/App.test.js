import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import About from '../App';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import NoMatchRoute from '../components/pageNotFound/NoMatchRoute';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByRole } = render(
    <Router history={history}>
      <Route component={NoMatchRoute} />
    </Router>
  );
  expect(getByRole('heading')).toHaveTextContent('404 Page Not Found');
});

test('full App rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
  const element = getByText(/Check Our Summer Sale/i);
  expect(element).toBeInTheDocument();
});

test('full App rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
  const element = getByText(/Cart/i);
  expect(element).toBeInTheDocument();
});

test('full App rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
  const element = getByText(/Home/i);
  expect(element).toBeInTheDocument();
});

test('App renders Home and I can navigate to Home page', () => {
  const history = createMemoryHistory();
  const { container, getByText, getByTestId } = render(
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );

  fireEvent.click(getByText('Signin'));
  expect(history.location.pathname).toBe('/signin');
});
