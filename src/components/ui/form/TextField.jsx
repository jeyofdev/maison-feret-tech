/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFieldMUI } from '@mui/material';
import { textFieldStyles } from './Form.style';

const TextField = ({ id, label, defaultValue, handleChange }) => {
  const classes = textFieldStyles();
  return (
    <TextFieldMUI
      className={classes.root}
      required
      id={id}
      label={label}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextField;
