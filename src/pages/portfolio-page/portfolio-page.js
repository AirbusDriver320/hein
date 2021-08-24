import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './portfolio-page.styles.css';
import jikapic from '../../assets/jika.png'
import vnavpic from '../../assets/vnav.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0
  },
  button: {
    justifyContent: "flex-end",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PortfolioPage() {
  const classes = useStyles();

  return (
    <div className='page'>
        <h1>Portfolio examples:</h1>
        <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Jika Market"
                            height="200"
                            image={jikapic}
                            title="Jika Market"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Jika Market
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Localized Ecommerce marketplace built using Node.js, ExpressJS and MongoDB. 
                            The frontend is served using Embedded Javascript templates (.ejs). Also used 
                            here is Google places API for addresses, Cloudinary for image starage and PayFast 
                            for secure online payment.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.button}>
                            <Button size="small" color="primary" href="http://atb-react.herokuapp.com/" target="_blank">
                                View website
                            </Button>
                        </CardActions>
                    </Card> 
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="VNAV Leather"
                            height="200"
                            image={vnavpic}
                            title="VNAV Leather"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                VNAV Leather
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Localized Ecommerce marketplace built using Node.js, ExpressJS and MongoDB. 
                            The frontend is served using Embedded Javascript templates (.ejs). Also used 
                            here is Google places API for addresses, Cloudinary for image starage and PayFast 
                            for secure online payment.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.button}>
                            <Button size="small" color="primary" href="https://vnav.co.za/" target="_blank">
                                View website
                            </Button>
                        </CardActions>
                    </Card> 
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="ATB Show"
                            height="200"
                            image={jikapic}
                            title="ATB Show"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                ATB Show
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Localized Ecommerce marketplace built using Node.js, ExpressJS and MongoDB. 
                            The frontend is served using Embedded Javascript templates (.ejs). Also used 
                            here is Google places API for addresses, Cloudinary for image starage and PayFast 
                            for secure online payment.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.button}>
                            <Button size="small" color="primary" href="http://atb-react.herokuapp.com/" target="_blank">
                                View React version
                            </Button>
                            <Button size="small" color="primary" href="http://atb-show.herokuapp.com/" target="_blank">
                                View Angular version
                            </Button>
                        </CardActions>
                    </Card> 
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}
