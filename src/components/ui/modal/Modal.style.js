import { makeStyles } from '@mui/styles';

const modalStyles = makeStyles({
  root: {
    position: 'relative',
    background: 'transparent',
    width: '80%',
    maxWidth: '712px',
  },
  header: {
    position: 'absolute',
    top: -30,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
  },
  content: {
    position: 'relative',
    marginTop: '30px',
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
  description: {
    background: '#FCF6F6',
    borderRadius: '10px',
    padding: '19px 36px',
  },
});

export default modalStyles;
