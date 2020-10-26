import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../services/AuthService';
import { FaBell } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

const Layout = ({ children, match, history }) => {
  const isActive = path => {
    if (match.path === path) {
      return { color: '#000' };
    } else {
      return { color: '#fff' };
    }
  };

  const nav = () => <a className="navbar-item"></a>;

  return (
    <>
      <section className="is-medium">
        <div className="container is-fluid">
          <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
              </a>

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
              <div className="navbar-start">
                <Link to="/" className="navbar-item is-active has-text-black">
                  Home
                </Link>
                {nav()}
              </div>

              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link is-arrowless">
                    <FaBriefcase />
                  </a>
                  <div className="navbar-dropdown">
                    <Link to="/admin/managers" className="navbar-item">
                      Admin / Managers
                    </Link>
                    <Link to="/admin/users-list" className="navbar-item">
                      Users
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link is-arrowless">
                    <FaBell />
                  </a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item">Overview</a>
                  </div>
                </div>
                <div className="navbar-item">
                  <div className="buttons">
                    {!isAuth() && (
                      <Fragment>
                        <Link to="/signup" className="button is-info">
                          <strong>Signup</strong>
                        </Link>
                        <Link to="/signin" className="button is-info">
                          <strong>Sign In</strong>
                        </Link>
                      </Fragment>
                    )}
                    {isAuth() && isAuth().role === 'admin' && (
                      <span className="navbar-item">
                        <strong className="">
                          <Link to="/admin" className="button is-info">
                            {isAuth().name}
                          </Link>
                        </strong>
                      </span>
                    )}

                    {isAuth() && isAuth().role === 'user' && (
                      <span className="navbar-item">
                        <strong className="">
                          <Link to="/private" className="button is-info">
                            {isAuth().name}
                          </Link>
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
          </nav>
        </div>
      </section>
      <section className="is-medium">
        <div className="container is-fluid">{children}</div>
      </section>
    </>
  );
};

export default withRouter(Layout);
