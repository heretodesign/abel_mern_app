import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styled from 'styled-components';
import img1 from '../assets/maksim-larin-LtB12xWnkpw-unsplash.jpg';
import img2 from '../assets/maksim-larin-Ai356rggKvw-unsplash.jpg';
import img3 from '../assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg';
import img4 from '../assets/maksim-larin-1vy2QcZd5FU-unsplash.jpg';
import SingleProduct from '../components/SingleProduct';
import Navbar from '../components/Header/Navbar';

import {
  getProduct,
  getSingleProduct,
  getSingleProductBySlug
} from '../services/ApiService';

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

const ProductItemPage = ({ match }) => {
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);

  const _id = match.params.id;
  const slug = match.params.slug;

  useEffect(() => {
    fetchSingleProduct();
  }, [slug]);

  const fetchSingleProduct = () => {
    getSingleProductBySlug(slug).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        setItem(res);
      }
    });
  };

  // useEffect(() => {
  //   fetchSingleProduct();
  // }, [_id]);
  // const fetchSingleProduct = () => {
  //   getSingleProduct(_id).then(res => {
  //     if (res.error) {
  //       setError(res.error);
  //     } else {
  //       setItems(res);
  //     }
  //   });
  // };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <section className="section is-paddingless-horizontal">
        <Div className="container-fluid grid is-large">
          <div className="firstsection">
            <div className="content" data-testid="content">
              <SingleProduct item={item} />
              {/*{items &&
                !!items.length &&
                items.map((item, i) => (
                  <div key={i} className="products-items">
                    <SingleProduct {...item} key={i} />
                  </div>
                ))}*/}
            </div>
          </div>
        </Div>
      </section>
    </>
  );
};

export default ProductItemPage;
