import { makeStyles } from '@mui/styles';

const modalStyles = makeStyles({
  root: {
    background: 'transparent',
    width: '80%',
    maxWidth: '712px',
  },
  content: {
    position: 'relative',
    background: '#FFFFFF',
    boxShadow: '0px 4px 76px 4px rgba(0, 0, 0, 0.08)',
    borderRadius: '10px',
    padding: '14px 27px 23px 18px',
  },
  buttonClose: {
    position: 'absolute',
    top: '17px',
    right: '15px',
    background: 'transparent',
    cursor: 'pointer',
    border: 'none',
    padding: '0',
  },
});

export default modalStyles;
