/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonMUI } from '@mui/material';
import useStyles from './Button.style';

const Button = ({ handleClick, children, style, disabled }) => {
  const classes = useStyles();
  return (
    <ButtonMUI
      variant="contained"
      className={classes.root}
      onClick={handleClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </ButtonMUI>
  );
};

Button.defaultProps = {
  style: {},
  disabled: false,
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  style: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
};

export default Button;
