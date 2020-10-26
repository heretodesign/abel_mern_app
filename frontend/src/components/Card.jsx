import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { addItem, getCart, updateItem, removeItem } from './cartHelpers';
import Checkout from '../pages/Checkout';

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
  font-size: 1.2rem;
  margin-bottom: 1px;
`;
const TextColor = styled.p`
  color: #003468;
`;

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = true,
  setRun = f => f,
  run = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const calculatePrice = () => {
    return cart.reduce((price, product) => price + product.price, 0);
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img
            src={process.env.PUBLIC_URL + `/assets/${product.image}.jpg`}
            alt="Placeholder image"
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <TextColor className="title is-5 has-text-left">
                Name: {product.name}
              </TextColor>
              <TextColor className="title is-5 has-text-left">
                Price: RM {product.price}
              </TextColor>
              <TextColor className="subtitle has-text-centered is-5">
                Quantity: {product.count}
              </TextColor>

              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <MainBtn
                        onClick={() => {
                          updateItem(product._id, product.count - 1);
                          setRun(!run);
                        }}
                      >
                        - Item
                      </MainBtn>
                    </div>
                    <div className="column">
                      <MainBtn
                        onClick={() => {
                          updateItem(product._id, product.count + 1);
                          setRun(!run);
                        }}
                      >
                        + Item
                      </MainBtn>
                    </div>
                    <div className="column">
                      <MainBtn
                        onClick={() => {
                          removeItem(product._id);
                          setRun(!run); // run useEffect in parent Cart
                        }}
                      >
                        Remove
                      </MainBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
};

Card.propTypes = {};

export default Card;
