import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import mongologo from '../../assets/mongodb.png';
import expresslogo from '../../assets/expressjs.svg';
import reactlogo from '../../assets/logo.svg';
import nodelogo from '../../assets/nodejs.svg';
import avatar from '../../assets/about_pic.jpg';

import './landing-page.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

function LandingPage() {
    const classes = useStyles();
    return (
        <div className='landing'>
            <header className="landing-header">
                <Avatar alt='Hein de Waal' src={avatar} className={classes.large} />                        
                <div>
                    <h1>Hein de Waal</h1>
                    <h3 className='sub1'>Full Stack MERN developer</h3>
                    <div>
                        <h5 className='sub2'>POWERED BY</h5>
                        <img src={mongologo} className="logo" alt="logo" />
                        <img src={expresslogo} className="logo2" alt="logo" />
                        <img src={reactlogo} className="logo" alt="logo" />
                        <img src={nodelogo} className="logo2" alt="logo" />
                        <h6 className='sub3'>and Material-UI for this site.</h6>                 
                    </div>                   
                </div>

            </header>           
        </div>

    )
}

export default LandingPage;