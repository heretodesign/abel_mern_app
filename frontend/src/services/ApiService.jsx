import queryString from "query-string";
import axios from "axios";

/**
 * @getProducts
 */
export const getProduct = async () =>
  await axios.get('http://localhost:4000/products');

/**
 * @getProducts
 */
export const getShopProducts = () => {
  const BASE_URL = 'http://localhost:4000/products'
  return fetch(BASE_URL, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

/**
 * @getProductBySlug
 */
// export const getSingleProductBySlug = async (slug) => {
//   const BASE_URL = 'http://localhost:4000/product'

//   await axios.get(BASE_URL + `/${slug}`)
//     .then(response => {
//       console.log('slug', response.data)
//       return response.data;
//     })
//     .catch(err => console.log(err));
// }

export const getSingleProductBySlug = slug => {
  const BASE_URL = 'http://localhost:4000/product'

  return fetch(BASE_URL + `/${slug}`, {
      method: "GET"
    })
    .then(response => {
      console.log('slug', response)
      return response.json();
    })
    .catch(err => console.log(err));
};

/**
 * @getProductById
 */
export const getSingleProduct = _id => {
  const BASE_URL = 'http://localhost:4000/products'

  return fetch(BASE_URL + `/${_id}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

/**
 * ============================================================================================
 */

/**
 * @getCategoryBySlug
 */

export const getProducts = sortBy => {
  return fetch(`${process.env.PRODUCTS_API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
  return fetch(`${process.env.API}/categories`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters
  };
  return fetch(`${process.env.API}/products/by/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const list = params => {
  const query = queryString.stringify(params);
  console.log("query", query);
  return fetch(`${process.env.API}/products/search?${query}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const read = productId => {
  return fetch(`${process.env.API}/product/${productId}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listRelated = productId => {
  return fetch(`${process.env.API}/products/related/${productId}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
  return fetch(`${process.env.API}/braintree/getToken/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
  return fetch(`${process.env.API}/braintree/payment/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => {
  return fetch(`${process.env.API}/order/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        order: createOrderData
      })
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};