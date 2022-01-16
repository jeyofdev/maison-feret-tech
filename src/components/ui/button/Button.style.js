import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#D0BDC3',
    padding: '8px 28px',
    backgroundColor: 'rgba(99, 45, 62, 1)',

    '&.disabled': {
      backgroundColor: 'rgba(99, 45, 62, 0.4)',
    },
    '&:hover': {
      backgroundColor: 'rgba(99, 45, 62, 1)',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'rgba(99, 45, 62, 1)',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
});

export default useStyles;
