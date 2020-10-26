import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/shared/Button';

afterEach(cleanup);

const defaultProps = {
  type: 'submit'
};

const props = {
  value: 'Start Game',
  className: 'player__startBtn',
  type: 'button'
};

describe('Button Component', () => {
  it('it renders with correct button label text', () => {
    const results = render(<Button {...props} />);
    expect(results.getByText('Start Game')).toBeInTheDocument();
  });

  it('it should have prop type of button', () => {
    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId('btn-submit');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('it should have classname attribute of btn', () => {
    const { getByTestId } = render(<Button {...props} />);
    const btn = getByTestId('btn-submit');
    expect(btn).toHaveClass('player__startBtn');
  });
});
