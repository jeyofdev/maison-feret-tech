import React from 'react';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import modalStyles from './Modal.style';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #e5e5e5;
  -webkit-tap-highlight-color: transparent;
`;

const Modal = ({ open, handleClose }) => {
  const classes = modalStyles();

  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box className={classes.root}>
        <Box className={classes.content}>
          <button
            type="button"
            className={classes.buttonClose}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: '20px' }} />
          </button>

          <Typography variant="p" component="div">
            Content of the modal
          </Typography>
        </Box>
      </Box>
    </StyledModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
