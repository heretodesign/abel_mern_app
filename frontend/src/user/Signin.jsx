import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Columns, Navbar, Header } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Layout from '../core/Layout';
import axios from 'axios';
import { authenticate, isAuth } from '../services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const SignIn = ({ history }) => {
  const [values, setValues] = useState({
    email: 'abel@gmail.com',
    password: 'abelshop123',
    buttonText: 'Submit'
  });

  const { email, password, buttonText } = values;

  const handleChange = name => event => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/signin`,
      data: { email, password }
    })
      .then(response => {
        console.log('SIGNIN SUCCESS', response);

        // save the response (user, token) locastorage/cookie
        authenticate(response, () => {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            buttonText: 'Submitted'
          });
          //toast.success(`Hey ${response.data.user.name}, Welcome Back!`);
          isAuth() && isAuth().role === 'admin'
            ? history.push('/main-dashboard')
            : history.push('/private/create-new-report');
        });
      })
      .catch(error => {
        console.log('SIGNIN ERROR', error.response.data);
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
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
      {/*{JSON.stringify(isAuth())}*/}
      <div className="container justify-content-center">
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        {JSON.stringify({ email, password })}
        <br /> <br /> <br />
        <br />
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <h1 className="is-size-4 has-text-weight-semibold	 has-text-center">
              SignIn Form
            </h1>
          </div>
        </div>
        <br />
        {signinForm()}
        <br />
        <div className="column is-three-fifths is-offset-one-fifth">
          <Link
            to="/auth/password/forgot"
            className="button is-small is-danger is-outlined"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
