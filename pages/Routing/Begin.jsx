import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AppBarColor} from '../container.module.css';
import {useRouter} from 'next/router'
// import { Router } from '@material-ui/icons';
import Register from './Register';
import Link from 'next/link'
// import {Grid} from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import employee from '../../public/images/employee.jpg';

// import FooterContainer from '@material-ui/core/FooterContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#3f9ab5'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    width:'190px'
  },

  footer:{
    // backgroundColor: '#2b9ecc',
    height: '45px'
  }
}));

export default function Begin() {
  const classes = useStyles();
const router = useRouter();

const handleRoute=(page)=> {
  router.push({pathname: 'Routing/Registeras', query: { page }});
};
  return (
    <div style={{overflowX:"hidden"}}> 
      
    <div className={classes.root}>
      <AppBar position="static"  className={AppBarColor}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#2b9ecc" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React-ION
          </Typography>
       
          <div style={{width: "160px",marginLeft: '1000px'}}>
            
          <Button  color="inherit"   onClick={() => handleRoute('Register')}  > Register </Button>  
          <Button color="inherit" onClick={() => handleRoute('Login')} >Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <img src="images/employee.jpg" alt="TutorialsPoint Logo" style={{height:'650px',
    width:'1424px'}}/> 
    
        <footer style={{marginTop:"-20px"}}>
          <div style={{backgroundColor:"#3f9ab5", height:"50px" ,alignContent:'center' ,color:'white'}}> <p style={{marginLeft:'600px'}}> Copyright © Techomoro 2020 | Powered by Floyet</p>
          </div>
        </footer>
        
    </div>
    </div>
  );
}