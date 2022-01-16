/* eslint-disable object-curly-newline */
import React from 'react';
import { Typography as TypographyMUI } from '@mui/material';
import PropTypes from 'prop-types';
import typographyStyles from './Typography.style';

const Typography = ({ className, children, variant, component, sx }) => {
  const classes = typographyStyles();

  return (
    <TypographyMUI
      className={classes[className]}
      variant={variant}
      component={component}
      sx={sx}
    >
      {children}
    </TypographyMUI>
  );
};

Typography.defaultProps = {
  sx: {},
};

Typography.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  variant: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.number),
};

export default Typography;
