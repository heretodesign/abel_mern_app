import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ type, className, value, onClick }) => {
  return (
    <LinkBtn
      type={type}
      className={className}
      // onClick={`btn button ${onClick}`}
      onClick={onClick}
      data-testid="btn-submit"
    >
      {value}
    </LinkBtn>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'submit'
};

const LinkBtn = styled.button`
  background: #003468;
  color: #fff;
  font-size: 1.1rem;
  margin-right: 10px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
