import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { getCart, itemTotal } from '../components/cartHelpers';
import Card from '../components/Card';
import Navbar from '../components/Header/Navbar';

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
  text-align: left;
`;
const TitleText = styled.p`
  color: #003468;
  font-size: 1.4rem;
  margin-bottom: 1px;
  text-align: left;
`;
const TextColor = styled.p`
  color: #003468;
`;
const SmallText = styled.p`
  color: #003468;
  font-size: 0.7rem;
  justify-content: left;
  align-items: left;
`;

const Cart = ({ history }) => {
  // const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  let items;
  useEffect(() => {
    items = getCart();
    // console.log(items);
    // setItems(getCart());
  }, []);

  const showItems = items => {
    return (
      <div>
        <hr />
        {getCart().map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
            updateItemQuantity={false}
          />
        ))}
      </div>
    );
  };

  const computerTotal = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartLen;
    if (cart) {
    }
  };

  const noItemsMessage = () => (
    <TextPara>
      Your cart is empty.
      <br />
      <br />
      <Link to="/products-list">
        <MainBtn className="button is-small has-test-small is-fullwidth">
          <strong>Continue shopping</strong>
        </MainBtn>
      </Link>
    </TextPara>
  );

  return (
    <>
    <Navbar />
        <br />
        <br />
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
          <div className="firstsection">
            <div className="content">
              <div className="columns">
                <div className="column is-6">
                  <SmallText>
                    2 HAVE A PROMO CODE?
                    <br />
                    If you have a promo code you will be able to apply it on the
                    payment page during checkout.
                  </SmallText>
                  <TextPara>
                    {getCart().length > 0 ? showItems(items) : noItemsMessage()}
                  </TextPara>
                </div>
                <div className="column is-1"></div>
                <div className="column is-5">
                  <div className="items">
                    <TitleText>Your cart summary</TitleText>
                    <TextPara>You Bag : {itemTotal()}</TextPara>
                    <TextPara>Subtotal: </TextPara>
                    <TextPara>Estimated Delivery & Handling</TextPara>
                    <TextPara>Total: </TextPara>
                  </div>

                  <br />
                  <br />
                  <div className="sale">
                    <Link to="/checkout">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        <strong>Guest Checkout</strong>
                      </MainBtn>
                    </Link>
                  </div>
                  <br />
                  <div className="sale">
                    <Link to="/checkout">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        <strong>Member Checkout</strong>
                      </MainBtn>
                    </Link>
                  </div>
                  <br />
                  <div className="sale">
                    <Link to="/products-list">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        <strong>Back to Shop</strong>
                      </MainBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Cart.propTypes = {};

export default withRouter(Cart);
