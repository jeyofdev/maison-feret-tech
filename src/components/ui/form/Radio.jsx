/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Radio as RadioMUI } from '@mui/material';
import { radioStyles } from './Form.style';

const Radio = ({ value, label, disabled, handleChange }) => {
  const classes = radioStyles();

  return (
    <FormControlLabel
      className={classes.root}
      control={<RadioMUI value={value} onChange={handleChange} />}
      label={label}
      disabled={disabled}
    />
  );
};

Radio.defaultProps = {
  disabled: false,
};

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Radio;
