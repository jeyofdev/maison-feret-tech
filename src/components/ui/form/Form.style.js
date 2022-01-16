import { makeStyles } from '@mui/styles';

export const textFieldStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '10px',

    '& .MuiOutlinedInput-input': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '21px',
      color: '#432E35',
      padding: '10px 12px',
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '21px',
      color: '#9F8D93',
      width: 'auto',
      background: '#FFF',
      padding: '0px 11px',
      transform: 'translate(12px, -9px) scale(1)',
    },
  },
});

export const selectStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '10px',

    '& .MuiOutlinedInput-input': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '21px',
      color: '#432E35',
      padding: '0 !important',
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '10px',
      lineHeight: '21px',
      color: '#9F8D93',
      width: 'auto',
      background: '#FFF',
      padding: '0px 11px',
      transform: 'translate(12px, -10px) scale(1)',
    },
  },
});

export const radioStyles = makeStyles({
  root: {
    color: '#432E35',
    marginRight: '18px',
    marginTop: '-5px',

    '& .MuiTypography-root': {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '10px',
      lineHeight: '21px',
    },
    '& .MuiFormControlLabel-label.Mui-disabled': {
      color: '#9F8D93',
    },
    '& .MuiRadio-root': {
      padding: '0 2px 0 10px',
    },
    '& .MuiSvgIcon-root': {
      width: '11px',
      lineHeight: '10px',
    },
    '& .MuiButtonBase-root-MuiRadio-root.Mui-checked': {
      color: 'red',
    },
  },
});
