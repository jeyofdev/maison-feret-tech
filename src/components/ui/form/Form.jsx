/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, FormControl, FormLabel, Grid, RadioGroup } from '@mui/material';
import TextField from './TextField';
import Select from './Select';
import Radio from './Radio';
import Button from '../button/Button';
import Typography from '../typography/Typography';
import {
  getColorsByLabel,
  getLabels,
  getSucrositesByLabel,
  getTypesByLabel,
} from '../../../utils';

const Form = ({ radioGroupClasses, formBottomClasses }) => {
  const [labelsOptions, setLabelsOptions] = useState([]);
  const [colorsOptions, setColorsOptions] = useState([]);
  const [typesOptions, setTypesOptions] = useState([]);
  const [sucrositesOptions, setSucrositesOptions] = useState([]);

  const [formDataName, setFormDataName] = useState('');
  const [formDataLabel, setFormDataLabel] = useState('');
  const [formDataColor, setFormDataColor] = useState('');
  const [formDataType, setFormDataType] = useState('');
  const [formDataSucrosite, setFormDataSucrosite] = useState('');
  const [formDataRang, setFormDataRang] = useState('');

  const handleChangeRadio = (e) => setFormDataRang(e.target.value);

  useEffect(() => {
    setLabelsOptions(getLabels());

    if (formDataLabel !== '') {
      setColorsOptions(getColorsByLabel(formDataLabel));
    }

    if (formDataLabel !== '') {
      setTypesOptions(getTypesByLabel(formDataLabel));
    }

    if (formDataLabel !== '') {
      setSucrositesOptions(getSucrositesByLabel(formDataLabel));
    }
  }, [formDataLabel]);

  return (
    <Grid
      container
      columnSpacing={{ xs: '33px', sm: '33px', md: '33px' }}
      rowSpacing="10px"
    >
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-helperText"
          label="Nom du vin"
          defaultValue=""
          handleChange={(e) => {
            setFormDataName(e.target.value);
          }}
        />
        {formDataName.length > 25 && (
          <Alert severity="error">
            Le champs doit contenir entre 1 et 25 caractères.
          </Alert>
        )}
      </Grid>

      <Grid item xs={12} sm={6}>
        <Select
          required
          label="Appellation"
          options={labelsOptions}
          handleChange={(_, newValue) => {
            setFormDataLabel(newValue);
          }}
          disabled={formDataName.length < 1 || formDataName.length > 25}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Select
          required
          label="couleur"
          options={colorsOptions}
          handleChange={(_, newValue) => {
            setFormDataColor(newValue);
          }}
          disabled={!formDataLabel}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Select
          required
          label="Type"
          options={typesOptions}
          handleChange={(_, newValue) => {
            setFormDataType(newValue);
          }}
          disabled={!formDataColor}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Select
          required
          label="Sucrosité"
          options={sucrositesOptions}
          handleChange={(_, newValue) => {
            setFormDataSucrosite(newValue);
          }}
          disabled={!formDataType}
        />
      </Grid>

      <Grid item xs={12} style={{ paddingTop: '13px' }}>
        <FormControl component="fieldset">
          <FormLabel className={radioGroupClasses} component="legend">
            Gender
          </FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <Radio
              value="premier vin"
              label="Premier vin"
              disabled
              handleChange={handleChangeRadio}
            />
            <Radio
              value="second vin"
              label="Second vin"
              handleChange={handleChangeRadio}
            />
            <Radio
              value="autre vin"
              label="Autre vin"
              handleChange={handleChangeRadio}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} style={{ paddingTop: '25px' }}>
        <div className={formBottomClasses}>
          <Typography className="info" variant="subtitle1" component="div">
            Après cette étape, vous ne pourrez plus modifier ces informations.
          </Typography>

          <Button
            handleClick={() => {
              console.log({
                name: formDataName,
                label: formDataLabel,
                color: formDataColor,
                type: formDataType,
                sucrosite: formDataSucrosite,
                rang: formDataRang,
              });
            }}
            style={{ marginTop: '9px' }}
            disabled={
              !formDataName ||
              !formDataLabel ||
              !formDataColor ||
              !formDataType ||
              !formDataSucrosite ||
              !formDataRang
            }
          >
            Suivant
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

Form.propTypes = {
  radioGroupClasses: PropTypes.string.isRequired,
  formBottomClasses: PropTypes.string.isRequired,
};

export default Form;
