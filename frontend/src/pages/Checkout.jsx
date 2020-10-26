import React, {
  useState
} from 'react';
import PropTypes from 'prop-types';

const Checkout = ({
  history
}) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  // // discount price
  // const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  // const [discountError, setDiscountError] = useState("");



  // { products, setRun = f => f, run = undefined }) => {
  //   const [data, setData] = useState({
  //       loading: false,
  //       success: false,
  //       clientToken: null,
  //       error: '',
  //       instance: {},
  //       address: ''
  //   });

  //   const userId = isAuthenticated() && isAuthenticated().user._id;
  //   const token = isAuthenticated() && isAuthenticated().token;



  // const showApplyCoupon = () => ( <
  //   >
  //   <
  //   input onChange = {
  //     (e) => {
  //       setCoupon(e.target.value);
  //       setDiscountError("");
  //     }
  //   }
  //   value = {
  //     coupon
  //   }
  //   type = "text"
  //   className = "form-control" /
  //   >
  //   <
  //   button onClick = {
  //     applyDiscountCoupon
  //   }
  //   className = "btn btn-primary mt-2" >
  //   Apply <
  //   /button> < / >
  // );

  return <div > checkout page < /div>;
};

Checkout.propTypes = {};

export default Checkout;