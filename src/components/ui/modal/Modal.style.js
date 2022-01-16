import { makeStyles } from '@mui/styles';
import bgModal from '../../../img/bg-modal.svg';

const modalStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: 'transparent',
    width: '90%',
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
    backgroundColor: '#FFFFFF',
    backgroundImage: `url(${bgModal})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
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
    padding: '5px',
    [theme.breakpoints.up('sm')]: {
      padding: '19px 36px',
    },
  },
  form: {
    marginTop: '13px',
    flexGrow: 1,
    width: '100%',
  },
  labelRadiosGroup: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '21px',
    color: '#9F8D93',
  },
  formBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',

    [theme.breakpoints.up('sm')]: {
      paddingRight: '24px',

      '& button': {
        marginRight: '14px',
      },
    },
  },
}));

export default modalStyles;
