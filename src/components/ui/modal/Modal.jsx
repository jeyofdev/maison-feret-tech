/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';
import { Box, FormControl, FormLabel, Grid, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import modalStyles from './Modal.style';
import popinAddWine from '../../../img/popin_ajout_vin.svg';
import arrow from '../../../img/arrow.svg';
import Typography from '../typography/Typography';
import TextField from '../form/TextField';
import Select from '../form/Select';
import Radio from '../form/Radio';
import Button from '../button/Button';

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
  const [formButtonIsDisabled] = useState(true);

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
            <Grid
              container
              columnSpacing={{ xs: '33px', sm: '33px', md: '33px' }}
              rowSpacing="10px"
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-helperText"
                  label="Nom du vin"
                  defaultValue=""
                />
              </Grid>

              <Grid item xs={6}>
                <Select
                  required
                  label="Appellation"
                  options={['Option 1', 'Option 2']}
                />
              </Grid>

              <Grid container item spacing={4} xs={6}>
                <Grid item xs={6}>
                  <Select
                    required
                    label="couleur"
                    options={['Option 1', 'Option 2']}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Select
                    required
                    label="Type"
                    options={['Option 1', 'Option 2']}
                  />
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid item xs={6}>
                  <Select
                    required
                    label="Sucrosité"
                    options={['Option 1', 'Option 2']}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ paddingTop: '13px' }}>
                <FormControl component="fieldset">
                  <FormLabel
                    className={classes.labelRadiosGroup}
                    component="legend"
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <Radio value="female" label="Premier vin" disabled />
                    <Radio value="male" label="Second vin" />
                    <Radio value="disabled" label="Autre vin" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} style={{ paddingTop: '25px' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    paddingRight: '24px',
                  }}
                >
                  <Typography
                    className="info"
                    variant="subtitle1"
                    component="div"
                  >
                    Après cette étape, vous ne pourrez plus modifier ces
                    informations.
                  </Typography>

                  <Button
                    handleClick={() => {}}
                    style={{ marginRight: '14px', marginTop: '9px' }}
                    disabled={formButtonIsDisabled}
                  >
                    Suivant
                  </Button>
                </div>
              </Grid>
            </Grid>
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
