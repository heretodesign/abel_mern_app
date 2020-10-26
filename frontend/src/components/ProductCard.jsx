import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import img2 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import Button from '../components/shared/Button';

const MainBtn = styled.button`
  color: #fff;
  background: #003468;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const TextPara = styled.p`
  color: #003468;
  font-size: 1.4rem;
`;

const ProductCard = ({
  showAddToCartButton = true,
  setRun = f => f,
  run = undefined,
  showRemoveProductButton = false,
  ...product
}) => {
  const {
    name,
    slug,
    category,
    price,
    description,
    total,
    image,
    _id
  } = product;

  const [redirect, setRedirect] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const [inCart, setInCart] = useState(product.inCart);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        // <Link to={`/product-item-view/${_id}`}>
        <Link to={`/product-view-single-item/${slug}`}>
          <MainBtn className="button is-small has-test-small is-fullwidth">
            View Product jhdsjhdsjh
          </MainBtn>
        </Link>
      )
    );
  };

  const addItem = () => {
    setInCart(product);
  };

  const updateItem = () => {
    console.log('added to Item');
  };
  const removeItem = () => {
    console.log('added to Item');
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <Button
          onClick={addToCart}
          className="button is-small has-test-small is-fullwidth"
        >
          Add To Cart
        </Button>
      )
    );
  };
  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setQuantity(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={quantity}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  return (
    <>
      <div class="card">
        <div class="card-image">
          <figure className="image is-120x50">
            <img
              width="400"
              height="400"
              src={process.env.PUBLIC_URL + `/assets/${image}.jpg`}
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div className="column">
                <div className="columns">
                  <TextPara class="title is-5 has-text-centered">
                    Item: {name}
                  </TextPara>
                </div>
                <br />
                <div className="columns">
                  <div className="itemBtn">
                    <Link to={`/product-view-single-item/${slug}`}>
                      <MainBtn className="button is-medium has-test-small is-fullwidth">
                        View Item Details
                      </MainBtn>
                    </Link>
                  </div>
                  <div className="cartBtn">
                    {showViewButton()}
                    {/*  <MainBtn onClick={showAddToCartBtn} disabled={quantity < 1}>
                      {quantity < 1 ? 'Out of stock' : 'Add to Cart'}
                    </MainBtn>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
