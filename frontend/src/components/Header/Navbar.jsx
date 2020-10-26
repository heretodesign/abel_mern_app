import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../shared/Button';

const MainBtn = styled.button`
  color: #fff;
  background: #003468;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const BtnDiv = styled.div`
  margin-right: 10px;
`;
const TextPara = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-right: 10px;
  background-color: transparent;
`;

const Navbar = () => {
  return (
    <>
      <section className="hero is-primary is-medium container-fluid imgLanding">
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={bkStyle}
        >
          <div className="container">
            <div className="navbar-brand" id="logoStyle">
              <Link className="navbar-item" to="/">
                <MainBtn className="button is-small has-test-small is-fullwidth">
                  A'SNEAKER HUB
                </MainBtn>
              </Link>

              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link
                    to="/products-list"
                    className="navbar-item has-text-small"
                  >
                    <TextPara>Shop</TextPara>
                  </Link>

                  <div className="buttons">
                    <BtnDiv>
                      <Link to="/cart">
                        <Button
                          value="Cart"
                          className="button is-small has-test-small is-fullwidth"
                        />
                      </Link>{' '}
                    </BtnDiv>
                    <div>
                      <Link to="/signin">
                        <Button
                          value="Signin"
                          className="button is-small has-test-small is-fullwidth"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

const pStyle = {
  color: '#fff'
};

const bkStyle = {
  // background: '#1167bf',
  background: '#003468',
  color: 'white'
};

const fullStyle = {
  background: '#white',
  color: '#011240'
};
export default Navbar;
