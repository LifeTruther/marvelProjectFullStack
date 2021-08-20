import React from 'react';
import { makeStyles, createStyles, Theme, useTheme, Typography, CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import bg_image from '../../assets/images/index-bg-top.jpg';
import cornericon from '../../assets/images/ironmanicon.png';
import {flexbox} from '@material-ui/system';
import { Link, RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom'; 
import Paper from '@material-ui/core/Paper';
import { AuthCheck, useAuth } from 'reactfire';

interface Props{
    title: string;
}

export const Home = ( props:Props) => {

    // New classes variable code
    const classes = useStyles();

    return (
        <div className={classes.root}>
            < CssBaseline />
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        
                        <AuthCheck fallback={
                            <li>
                                <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                            </li>
                        }>
                        
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>The Repo</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                        </li>
                        </AuthCheck>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Welcome to my first full-stack project. 
                        <br/>Take a look at the heroes and stories I have made,
                        <br/>And feel free to add your own!</p>
                </div>
            </main>
        </div>
    )
}

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            padding: '0',
            margin: '0'
        },
        navbar_container: {
            display: 'flex',
            minWidth: '100%',
            alignItems: 'center',
            backgroundColor: '#2d3339',
            maxHeight: '3.5rem'
        },

        logo:{
            margin: '0'
        },
        logo_a: {
            color: 'rgb(28,24,22)',
        },
        logo_navigation: {
            listStyle: 'none',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginLeft: 'auto',
            marginRight: '0.8rem',
            marginInlineEnd: '2rem'
        },
        navigation: {
            display: 'flex'
        },
        nav_a:{
            display: 'block',
            marginRight: '1 rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '0.6rem'
        },

        main: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1.0)), url(${bg_image});`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
        },
        main_text:{
            textAlign: 'center',
            position: 'relative',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -20%)',
            color: 'white',
            fontSize: '2.5rem'
        }
        
    })
)
