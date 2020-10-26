import React from 'react';
import styled from 'styled-components';
import img from '../assets/revolt-164_6wVEHfI-unsplash.jpg';
import { Link } from 'react-router-dom';

const ImgDiv = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 450px;
  padding-bottom: 70px;
`;

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  padding-top: 100px;
`;

const Div = styled.div`
  padding-left: 20px;
`;

const MainBtn = styled.button`
  color: #fff;
  background: transparent;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Summer = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="firstsection">
            <div className="content">
              <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                All new
              </p>
            </div>
            <div className="content">
              <div className="columns">
                <div className="column is-half">
                  <ImgDiv className="content">
                    <Div>
                      <ParagraphStyle className="has-text-left">
                        Direct product from
                      </ParagraphStyle>
                      <div className="columns">
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Shop
                            </MainBtn>
                          </Link>
                        </div>
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Check it out
                            </MainBtn>
                          </Link>
                        </div>
                      </div>
                    </Div>
                  </ImgDiv>
                </div>
                <div className="column">
                  <ImgDiv className="content">
                    <Div>
                      <ParagraphStyle className="has-text-left">
                        Direct product from
                      </ParagraphStyle>
                      <div className="columns">
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Shop
                            </MainBtn>
                          </Link>
                        </div>
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Check it out
                            </MainBtn>
                          </Link>
                        </div>
                      </div>
                    </Div>
                  </ImgDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summer;
