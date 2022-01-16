/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Autocomplete as AutocompleteMUI } from '@mui/material';
import { selectStyles } from './Form.style';

const Select = ({ label, required, options, handleChange, disabled }) => {
  const classes = selectStyles();

  return (
    <AutocompleteMUI
      className={classes.root}
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => (
        <TextField {...params} required={required} label={label} />
      )}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

Select.defaultProps = {
  required: false,
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Select;
