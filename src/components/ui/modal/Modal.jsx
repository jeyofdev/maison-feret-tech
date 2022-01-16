import React from 'react';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import modalStyles from './Modal.style';
import popinAddWine from '../../../img/popin_ajout_vin.svg';
import arrow from '../../../img/arrow.svg';
import Typography from '../typography/Typography';
import Form from '../form/Form';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
  max-height: calc(100vh - (2 * 10px));
  overflow-y: scroll;

  ${(props) => props.theme.breakpoints.up('sm')} {
    align-items: center;
  }
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
        <div className={classes.header}>
          <img src={popinAddWine} alt="decoration haut de la modale" />
        </div>

        <Box className={classes.content}>
          <button
            type="button"
            className={classes.buttonClose}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: '20px' }} />
          </button>

          <Typography
            className="h2"
            variant="h2"
            component="div"
            sx={{
              mt: '60px',
              textAlign: 'center',
              zIndex: 50,
              mb: '22px',
            }}
          >
            Content of the modal
          </Typography>

          <Box className={classes.description}>
            <Typography className="root" variant="subtitle1" component="div">
              <span style={{ marginRight: '5px' }}>
                <img src={arrow} alt="decoration description" />
              </span>
              Ajouter un vin vous permet de renseigner d&apos;une manière très
              générale les informations immuables d&apos;un millésime à
              l&apos;autre. Vous pourrez ensuite ajouter ses millésimes avec un
              niveau de précision beaucoup plus élevé.
            </Typography>
          </Box>

          <Box className={classes.form} component="form" noValidate>
            <Form
              radioGroupClasses={classes.labelRadiosGroup}
              formBottomClasses={classes.formBottom}
            />
          </Box>
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
