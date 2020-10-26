import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Columns, Navbar, Header } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Layout from '../core/Layout';
import { authenticate, isAuth } from '../services/AuthService';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const SignUp = () => {
  const [values, setValues] = useState({
    name: 'abel mernstack',
    email: 'abel@gmail.com',
    password: 'abelshop123',
    age: '26',
    address: 'Bangsa South 3839, jalan murni 3',
    buttonText: 'Submit'
  });

  const { name, email, age, address, password, buttonText } = values;

  const handleChange = name => event => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: 'http://localhost:4000/users',
      data: { name, email, password, age, address }
    })
      .then(response => {
        console.log('SIGNUP SUCCESS', response);
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          age: '',
          address: '',
          buttonText: 'Submitted'
        });
        toast.success(response.data.message);
      })
      .catch(error => {
        console.log('SIGNUP ERROR', error.response.data);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <form>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <label className="text-muted">Name</label>
              <input
                type="text"
                className="input is-medium"
                value={name}
                onChange={handleChange('name')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <label className="text-muted">Email</label>
              <input
                type="email"
                className="input is-medium"
                value={email}
                onChange={handleChange('email')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <label className="text-muted">Password</label>
              <input
                type="password"
                className="input is-medium"
                value={password}
                onChange={handleChange('password')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <label className="text-muted">Age</label>
              <input
                type="age"
                className="input is-medium"
                value={age}
                onChange={handleChange('age')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <label className="text-muted">Address</label>
              <input
                type="address"
                className="input is-medium"
                value={address}
                onChange={handleChange('address')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <button
                className="button is-medium is-info is-fullwidth"
                onClick={handleSubmit}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="container">
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        {/*{JSON.stringify({ name, email, password, age, address })}*/}
        <br /> <br /> <br />
        <br />
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <h1 className="is-size-4 has-text-weight-semibold	 has-text-center">
              Sign Up Form
            </h1>
          </div>
        </div>
        <br />
        {signupForm()}
        <br />
        <div className="column is-three-fifths is-offset-one-fifth">
          <Link to="/signup" className="button is-small is-danger is-outlined">
            Forgot Password
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
