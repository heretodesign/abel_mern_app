import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/shared/Button';
import InputGroup from '../components/shared/InputGroup';
import { getItem } from './cartHelpers';

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
const SmallText = styled.p`
  color: #003468;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1px;
`;
const TextColor = styled.p`
  color: #003468;
`;
const BoldText = styled.p`
  color: #003468;
  font-size: 1.6rem;
`;
const LinkBtn = styled.button`
  background: #003468;
  color: #000;
`;

const SingleProduct = ({ item }) => {
  const [redirect, setRedirect] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const [inCart, setInCart] = useState(item.inCart);
  const [add, setAdd] = useState('Add Item');

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      let emptyCart = [];
      cart = localStorage.setItem('cart', JSON.stringify(emptyCart));
      // setLength(cart);
    } else {
      cart = cart;
    }
  }, []);

  let history = useHistory();

  const { name, slug, category, total, price, image, description, _id } = item;

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
      cart.push({
        ...item,
        count: 1
      });

      cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
        return cart.find(p => p._id === id);
      });
      localStorage.setItem('cart', JSON.stringify(cart));
      setAdd('In-Cart');
      setInCart(true);
    }
  };

  const getItem = _id => {
    return item.find(item => item._id === _id);
  };

  const AddToCart = () => {
    let cart = [];

    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart = localStorage.setItem('cart', JSON.stringify(cart));
      cart = JSON.parse(localStorage.getItem('cart'));
      console.log('0000', item);
      cart.push({
        item,
        quantity: 1
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const computerTotalItems = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let noOfItemsInCart = cart.length;
    return noOfItemsInCart;
  };

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="card card-shadow">
                <div className="card-image">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/${image}.jpg`}
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="card">
                <div className="card-image">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/${image}.jpg`}
                    alt="Placeholder image"
                  />
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <TextColor className="title is-5 has-text-centered">
                        Aerial Zoom
                      </TextColor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <img
                    src={process.env.PUBLIC_URL + `/assets/${image}.jpg`}
                    alt="Placeholder image"
                  />
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <TextColor className="title is-5 has-text-centered">
                        Aerial View
                      </TextColor>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="content marketproduct" id="contentSide">
            <div className="control">
              <Link
                to="/contact-us"
                className="button has-text-white is-small"
                style={{ background: '#003468' }}
              >
                New Arrival
              </Link>
            </div>
            <h3
              className="subtitle is-6 has-text-left is-uppercase"
              id="headTitle"
            >
              Nike Challenger
            </h3>
            <TextColor className="subtitle has-text-left is-3 is-uppercase">
              Name: {name}
            </TextColor>

            <TextPara className="has-text-left">{description}</TextPara>
            <br />
            <br />
            <TextPara className="has-text-left is-underlined">
              <Button clasName="is-outlined is-info" value="US10" disabled />
            </TextPara>
            <TextPara className="has-text-left">
              FREE Shipping on this item!
            </TextPara>
            <br />
            <br />
            <TextPara className="has-text-left">Cat: {category}</TextPara>
            <BoldText className="has-text-left">Price: RM {price}</BoldText>
            <br />
            <br />
            <div class="columns">
              <div className="column">
                <div className="columns">
                  <div className="column">
                    <Link to="/products-list">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        <strong>Go Back to Shop</strong>
                      </MainBtn>
                    </Link>
                  </div>
                  <div className="column is-half">
                    <MainBtn
                      className="button is-small has-text-white has-test-small is-fullwidth"
                      onClick={handleAddToCart}
                      disabled={inCart === true}
                    >
                      {inCart ? (
                        <SmallText className="has-text-left">
                          <FontAwesomeIcon icon={faCartPlus} />
                          {'  '}In-Cart
                        </SmallText>
                      ) : (
                        <strong>
                          <FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart
                        </strong>
                      )}
                    </MainBtn>
                    {/*<MainBtn
                      className="button is-small has-text-small is-fullwidth"
                      onClick={() => {
                        AddToCart();
                      }}
                    >
                      {inCart ? (
                        <SmallText className="has-text-left">
                          <FontAwesomeIcon icon={faCartPlus} />
                          {'  '}In-Cart
                        </SmallText>
                      ) : (
                        <SmallText className="has-text-left has-text-small has-text-white">
                          <FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart
                        </SmallText>
                      )}
                      </MainBtn>*/}
                  </div>
                  <div className="column is-one-quarter">
                    <Link to="/cart">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        <strong>View Cart [{computerTotalItems()}]</strong>
                      </MainBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="content">
            <div class="columns">
              <div className="column">
                <img src={process.env.PUBLIC_URL + `/assets/${image}.jpg`} alt="Placeholder image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="content">
            <div class="columns">
              <div className="column">
                <img src={process.env.PUBLIC_URL + `/assets/${image}.jpg`} alt="Placeholder image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="content">
            <div class="columns">
              <div className="column">
                <img src={process.env.PUBLIC_URL + `/assets/${image}.jpg`} alt="Placeholder image" />
              </div>
            </div>
          </div>
        </div>
  </section>*/}
    </>
  );
};

SingleProduct.propTypes = {};

export default SingleProduct;
