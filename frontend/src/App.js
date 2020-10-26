import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Flickr from './Flickr-1.4s-200px.svg';
import NoMatchRoute from './components/pageNotFound/NoMatchRoute';
import NavLayout from './core/NavLayout';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductItemPage = lazy(() => import('./pages/ProductItemPage'));
const ProductListPage = lazy(() => import('./pages/ProductListPage'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Signin = lazy(() => import('./user/Signin'));
const Register = lazy(() => import('./user/Signup'));
const UserRoute = lazy(() => import('./auth/UserRoute'));
const Payment = lazy(() => import('./pages/Payment'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="has-text-white has-text-centered">
          <img src={Flickr} alt="Flickr" />
        </div>
      }
    >
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products-list" component={ProductListPage} />
            <Route
              exact
              path="/product-view-single-item/:slug"
              component={ProductItemPage}
            />
            <Route
              exact
              path="/product-item-view/:id"
              component={ProductItemPage}
            />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/category/:slug" component={Register} />
            <UserRoute exact path="/checkout" component={Checkout} />
            <UserRoute exact path="/payment" component={Payment} />
            <Route component={NoMatchRoute} />
          </Switch>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
