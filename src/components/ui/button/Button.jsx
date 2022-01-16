import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonMUI } from '@mui/material';
import useStyles from './Button.style';

const Button = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <ButtonMUI
      variant="contained"
      className={classes.root}
      onClick={handleClick}
    >
      Ajouter un vin
    </ButtonMUI>
  );
};

Button.propTypes = { handleClick: PropTypes.func.isRequired };

export default Button;
