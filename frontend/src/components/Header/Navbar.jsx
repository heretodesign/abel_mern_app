import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../../services/AuthService';
import { FaBell } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
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

const Navbar = ({ children, match, history }) => {
  return (
    <>
      <section className="hero is-primary is-medium container-fluid imgLanding">
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ background: '#003468', color: 'white' }}
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
                      </Link>
                    </BtnDiv>
                    {!isAuth() && (
                      <Fragment>
                        <BtnDiv>
                          <Link to="/signup">
                            <Button
                              value="Signup"
                              className="button is-small has-test-small is-fullwidth"
                            />
                          </Link>
                        </BtnDiv>
                        <BtnDiv>
                          <Link to="/signin">
                            <Button
                              value="Sign In"
                              className="button is-small has-test-small is-fullwidth"
                            />
                          </Link>
                        </BtnDiv>
                      </Fragment>
                    )}
                    {isAuth() && isAuth().role === 'admin' && (
                      <span className="navbar-item">
                        <strong className="">
                          <BtnDiv>
                            <Link to="/admin">
                              <TextPara>{isAuth().name}</TextPara>
                            </Link>
                          </BtnDiv>
                        </strong>
                      </span>
                    )}

                    {isAuth() && isAuth().role === 'user' && (
                      <span className="navbar-item">
                        <strong className="">
                          <BtnDiv>
                            <Link to="/private">
                              <TextPara>{isAuth().name}</TextPara>
                            </Link>
                          </BtnDiv>
                        </strong>
                      </span>
                    )}

                    {isAuth() && (
                      <span
                        className="nav-link"
                        onClick={() => {
                          signout(() => {
                            history.push('/');
                          });
                        }}
                      >
                        <strong className="button is-info">Signout</strong>
                      </span>
                    )}
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

export default Navbar;
