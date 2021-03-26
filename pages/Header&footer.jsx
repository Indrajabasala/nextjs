import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

// import FooterContainer from '@material-ui/core/FooterContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width:'180px'
  },
  footer:{
    backgroundColor: 'green',
    height: '45px'
  }
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React-ION
          </Typography>
          <div style={{width: "160px",marginLeft: '1040px'}}>
          <Button  color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
   
        <footer style={{marginTop:"650px"}}>
          <div style={{backgroundColor:"#3f51b5", height:"50px" ,alignContent:'center' ,color:'white'}}> <p style={{marginLeft:'300px'}}> @copyrights.com</p>
          </div>
        </footer>
        
    </div>
  );
}