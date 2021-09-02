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
import Chip from '@material-ui/core/Chip'

import './portfolio-page.styles.css';
import jikapic from '../../assets/jika.jpg'
import vnavpic from '../../assets/vnav.jpg'
import atbshow from '../../assets/atbshow.jpg'
import crwnpic from '../../assets/crwn.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0
  },
  button: {
    justifyContent: "flex-end",
  },
}));

export default function PortfolioPage() {
  const classes = useStyles();

  return (
    <div className='page'>
        <h1>Some of my work so far:</h1>
        <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={4}>
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
                        Localized Ecommerce marketplace for small vendors to sell online. Users can open an 
                        online store in minutes and upload their products to start selling.
                        <p>
                            Backend:
                            <div>
                                <Chip size="small" label="Node.js" className='chips' /><Chip size="small" label="Express.js" className='chips' />
                                <Chip size="small" label="MongoDB" className='chips' />
                            </div>
                        </p>
                        <p>
                            Frontend:
                            <div>
                                <Chip size="small" label="Embedded Javascript templates (.ejs)" className='chips' /><Chip size="small" label="HTML5" className='chips' />
                                <Chip size="small" label="CSS3" className='chips' /><Chip size="small" label="JavaScript" className='chips' /><Chip size="small" label="Bootstrap" className='chips' />
                            </div>
                        </p>
                        <p>
                            Other Tech:
                            <div>
                                <Chip size="small" label="Google places API" className='chips' /><Chip size="small" label="Cloudinary" className='chips' />
                                <Chip size="small" label="PayFast payment gateway" className='chips' />
                            </div>
                        </p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary" href="https://jika.herokuapp.com/" target="_blank">
                            View website
                        </Button>
                    </CardActions>
                </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
                        Fully fledged single vendor online shop with user products wishlist and review functionality.
                        Full admin panel for managing orders, stock qty, products, categories, users, shipping box sizes and site settings.
                        Automatic system emails when orders are received and dispatched.
                        <p>
                            Backend:
                            <div>
                                <Chip size="small" label="Node.js" className='chips' /><Chip size="small" label="Express.js" className='chips' />
                                <Chip size="small" label="MongoDB" className='chips' />
                            </div>
                        </p>
                        <p>
                            Frontend:
                            <div>
                                <Chip size="small" label="Embedded Javascript templates (.ejs)" className='chips' /><Chip size="small" label="HTML5" className='chips' />
                                <Chip size="small" label="CSS3" className='chips' /><Chip size="small" label="JavaScript" className='chips' /><Chip size="small" label="Bootstrap" className='chips' />
                            </div>
                        </p>
                        <p>
                            Other Tech:
                            <div>
                                <Chip size="small" label="AWS Elastic Beanstalk" className='chips' /><Chip size="small" label="GitHub Actions" className='chips' />
                                <Chip size="small" label="Google places API" className='chips' /><Chip size="small" label="Cloudinary" className='chips' />
                                <Chip size="small" label="PayFast payment gateway" className='chips' /><Chip size="small" label="Aramex API" className='chips' />
                                <Chip size="small" label="CI/CD" className='chips' />
                            </div>
                        </p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary" href="https://vnav.co.za/" target="_blank">
                            View website
                        </Button>
                    </CardActions>
                </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="ATB Show"
                        height="200"
                        image={atbshow}
                        title="ATB Show"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ATB Show DEMO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Demo page based on a picture of how a site is required to look. Built in both Angular and ReactJS, 
                            text and image URL's are fetched from an API built for this purpose hosted on Heroku.
                        <p>
                            Backend:
                            <div>
                                <Chip size="small" label="Node.js" className='chips' /><Chip size="small" label="Express.js" className='chips' />
                                <Chip size="small" label="REST API" className='chips' /><Chip size="small" label="JSON" className='chips' />
                            </div>
                        </p>
                        <p>
                            Frontend:
                            <div>
                                <Chip size="small" label="React.js" className='chips' /><Chip size="small" label="Angular" className='chips' />
                                <Chip size="small" label="HTML5" className='chips' /><Chip size="small" label="CSS3" className='chips' />
                                <Chip size="small" label="React Bootstrap" className='chips' /><Chip size="small" label="JavaScript" className='chips' />
                                <Chip size="small" label="Bootstrap" className='chips' /><Chip size="small" label="TypeScript" className='chips' />
                            </div>
                        </p>
                        <p>
                            Other Tech:
                            <div>
                                <Chip size="small" label="Heroku" className='chips' /><Chip size="small" label="GitHub" className='chips' />
                                <Chip size="small" label="CI/CD" className='chips' />
                            </div>
                        </p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary" href="https://www.dropbox.com/s/pbgivdxtn1m9dt0/ATB%20Showcase.jpg?dl=0" target="_blank">
                            View Image
                        </Button>
                        <Button size="small" color="primary" href="http://atb-react.herokuapp.com/" target="_blank">
                            View React version
                        </Button>
                        <Button size="small" color="primary" href="http://atb-show.herokuapp.com/" target="_blank">
                            View Angular version
                        </Button>
                    </CardActions>
                </Card> 
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="CRWN Clothing Demo"
                        height="200"
                        image={crwnpic}
                        title="CRWN Clothing Demo"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            CRWN Clothing Demo
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        A frontend clothing store for portfolio purposes.
                        <p>
                            Frontend:
                            <div>
                                <Chip size="small" label="React.js" className='chips' /><Chip size="small" label="Firebase" className='chips' />
                                <Chip size="small" label="Firestore" className='chips' /><Chip size="small" label="Redux" className='chips' />
                                <Chip size="small" label="Stripe" className='chips' /><Chip size="small" label="HTML5" className='chips' />
                                <Chip size="small" label="CSS3" className='chips' /><Chip size="small" label="JavaScript" className='chips' />
                            </div>
                        </p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary" href="https://crwn-inc.herokuapp.com/" target="_blank">
                            View website
                        </Button>
                    </CardActions>
                </Card> 
            </Grid>
        </Grid>
    </div>
  );
}
