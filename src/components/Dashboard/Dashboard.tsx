import React, {useState} from 'react';
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { Link, RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import {DataTable} from '../../components';

// drawer styling and methods to open/close.
const drawerWidth = 240;

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            display: 'flex',
        },
        appBar:{
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            
        },
        appBarShift:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        menuButton:{
            marginRight: theme.spacing(2)
        },
        hide: {
            display: 'none'
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        drawerHeader:{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0,1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end'
        },
        content:{
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin',{
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            marginLeft: -drawerWidth
        },
        contentShift:{
            transition: theme.transitions.create(['margin', 'width'],{
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        },
        toolbar: {
            display: 'flex',
            backgroundColor: '#336600',
            color: 'white',
        },
        toolbar_button: {
            marginLeft: 'auto',
            textDecoration: 'none',
            fontSize: '1.2rem',
            color: 'white'
        }
    })
);

interface DashProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};

export const Dashboard = withRouter((props:DashProps) => {
    
    const {history} = props
    const classes = useStyles();
    const theme = useTheme();
    // Usestate hook
    const [open, setOpen] = useState(false);
    
    // functions to set state of 'open'
    const handleDrawerOpen = () =>{
        setOpen(true);
    };
    const handleDrawerClose = () =>{
        setOpen(false);
    };

    // placeholder item-names
    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('/signin')
        }
    ];
    // returning the Dashboard:


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open
            })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton 
                    color="inherit" 
                    aria-label="open drawer" 
                    onClick ={handleDrawerOpen} 
                    edge="start" 
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" noWrap>Dashboard</Typography>
                    <Link to="/" className={classes.toolbar_button}><Button className={classes.toolbar_button}>Home</Button></Link>
                </Toolbar>   
            </AppBar>
            <MUIDrawer 
                className={classes.drawer} 
                variant='persistent' 
                anchor='left' 
                open={open}
                classes={{paper: classes.drawerPaper
                }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>    
                    </div>  
                    <Divider />
                    <List>
                        {itemsList.map((item, index) =>{
                            const { text, onClick } = item;
                            return (
                                <ListItem button key={text} onClick={onClick}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        })}   
                    </List>  
                </MUIDrawer>
                <main className={clsx(classes.content,{[classes.contentShift]: open})}>
                    {/* div is for spacing */}
                    <div className={classes.drawerHeader} />
                    <h1>Data table goes here...Does shift?</h1>
                    <DataTable/>
                </main>
        </div>
        
    )
})