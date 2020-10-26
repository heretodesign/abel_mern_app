import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import img1 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img2 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img3 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img4 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import ProductCard from '../components/ProductCard';
import { getProduct, getShopProducts } from '../services/ApiService';
import Navbar from '../components/Header/Navbar';

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

const ProductListPage = ({ match }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    getProduct().then(res => {
      console.log('this is res data', res);
      if (res.error) {
        setError(res.error);
      } else {
        setProducts(res.data);
      }
    });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <section className="section is-paddingless-horizontal" id="aboutPage">
        <div className="container-fluid grid is-large" id="contAboutPage">
          <div className="firstsection">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <div className="content" id="contentSide">
                    <h3
                      className="subtitle is-1 has-text-left is-uppercase"
                      id="headTitle"
                    >
                      Sport Inspired, Runway Finished
                    </h3>
                    <br />
                    <br />
                    <TextPara className="has-text-left">
                      From a Parisian runway to an ice rink in Tokyo, motion
                      connects the worlds of high fashion and athletics. The
                      Nike x sacai Men's Parka is designed to provide an
                      oversized fit ideal for movement, giving you room to
                      modify your style by layering underneath.
                    </TextPara>
                    <br />
                    <p className="has-text-left">The Nike Challenge</p>
                    <br />
                    <br />
                    <br />
                    <h4 className="subtitle is-1 has-text-left is-uppercase has-text-weight-semibold">
                      Elements of Style
                    </h4>
                    <TextPara className="has-text-left">
                      Designed for styling versatility, the parka combines
                      multiple materials for a contrasted look—nylon panelling
                      surrounds Melton wool overlays on the sleeves, collar,
                      lower yoke and extended cuffs. Chevron baffling throughout
                      the silhouette and a two-way zip make for classic sport
                      styling while a down fill keeps you comfortable in the
                      cold.
                    </TextPara>
                    <br />
                    <br />
                    <br />
                    <h4 className="subtitle is-1 has-text-left is-uppercase has-text-weight-semibold">
                      A History of Versatility
                    </h4>
                    <TextPara className="has-text-left">
                      Blending two looks in one has long been an aesthetic
                      technique of sacai's founder Chitose Abe. Past
                      collaborations with Nike have yielded innovative styles,
                      reinventing silhouettes many thought couldn't be
                      reinvented. "Down jackets and hoodies are nothing new and
                      they never will be", says Abe about the collection. "But
                      we re-imagined ordinary winter styles into something we've
                      never seen before".
                    </TextPara>
                  </div>
                </div>
                <div className="column is-multiline is-centered is-four-fifths">
                  <div className="columns is-one-third">
                    <div className="column ">
                      {products.map((product, i) => (
                        <div
                          key={i}
                          className="products-items"
                          data-testid="products-items"
                        >
                          <ProductCard {...product} key={product._id} />
                        </div>
                      ))}
                    </div>
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

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#003468',
  marginBottom: '1px'
};

const colorStyle = {
  color: '#003468'
};

const bkStyle = {
  background: '#003468',
  color: 'white'
};

const outlinedStyle = {
  borderColor: '#003468',
  color: '#003468'
};

export default withRouter(ProductListPage);
