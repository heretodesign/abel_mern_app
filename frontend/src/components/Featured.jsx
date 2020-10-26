import React from 'react';
import styled from 'styled-components';
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img1 from '../assets/jade-scarlato-I70aNOmj314-unsplash.jpg';
import img2 from '../assets/grailify-6Fm1f2kvRWg-unsplash.jpg';
import img3 from '../assets/maksim-larin-Ai356rggKvw-unsplash.jpg';
import { Link } from 'react-router-dom';

const ImgDiv = styled.div`
  background-image: url(${img3});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 500px;
  padding-bottom: 70px;
`;

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  padding-top: 100px;
`;

const Div = styled.div`
  padding-left: 20px;
  padding-top: 100px;
`;

const MainBtn = styled.button`
  color: #fff;
  background: transparent;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Featured = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container-fluid grid is-large">
          <div className="firstsection">
            <div className="content">
              <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">
                More new
              </p>
            </div>
            <div className="content">
              <div className="columns">
                <div className="column">
                  <ImgDiv className="content">
                    <Div>
                      <div className="columns">
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn
                              className="button is-small has-test-small is-fullwidth"
                              id="landBtn"
                            >
                              Kids
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
                      <div className="columns">
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Men
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
                      <div className="columns">
                        <div className="column is-one-quarter">
                          <Link to="/products-list">
                            <MainBtn className="button is-small has-test-small is-fullwidth">
                              Women
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

export default Featured;
