import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import Summer from '../components/Summer';
import Featured from '../components/Featured';
import Header from '../components/Header/Header';

const Section = styled.section`
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
`;
const TopDiv = styled.p`
  font-size: 13px;
  padding: 10px;
  text-align: center;
  line-height: 16px;
  background: #fff3;
  color: #fff;
  width: 100%;
`;
const Div = styled.div`
  width: 450px;
  padding: 14px;

  &:hover: {
    background: #fff3;
  }

  @media (max-width: 768px) {
    width: 450px;
    padding: 10px;
  }
`;
const MainBtn = styled.button`
  color: #fff;
  background: #003468;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const TextSpan = styled.span`
  color: #fba502;
`;
const ColorPara = styled.p`
  color: #fff;
  font-size: 2.8rem;
  font-weight: bolder;
`;
const TextPara = styled.p`
  color: #fff;
  font-size: 1.4rem;
`;
const ContactBtn = {
  color: '#fff',
  background: 'transparent',

  '&:hover': {
    backgroundColor: 'black',
    color: 'white'
  }
};

const Home = () => {
  return (
    <>
      <Section className="hero is-primary is-medium">
        <div className="is-paddingless-horizontal topNav">
          <div className="container-fluid grid">
            <div className="devsection">
              <TopDiv className="subtitl is-5 has-text-centered isdata">
                <strong className="has-text-white">MERDEKA DAY SPECIAL</strong>:
                – GET ADDITIONAL 25% OFF* WHEN YOU PURCHASE MIN. 2 ITEMS*. USE
                CODE: MERDEKA25
              </TopDiv>
            </div>
          </div>
        </div>
        <Header />

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <ColorPara className="subtitle is-uppercase has-text-left is-1">
                      <strong>The Next</strong> <TextSpan>Generation</TextSpan>{' '}
                      – Sneakers
                    </ColorPara>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <TextPara className="has-text-left">
                      Glide your way through life, walk faster in a clear path,
                      let sneaker hub summon you next big step.
                    </TextPara>
                  </div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <Link to="/products-list">
                      <MainBtn className="button is-small has-test-small is-fullwidth">
                        Check Our Summer Sale
                      </MainBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Summer />
      <Featured />
    </>
  );
};

export default withRouter(Home);
