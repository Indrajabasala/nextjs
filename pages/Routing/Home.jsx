import React from 'react'
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
// import { CallMissedSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// const useStyles = makeStyles((theme) => ({
//     head:{
//         backgroundColor:'#26a9c9'
//     }
  
//   }));

function Home() {
    const router = useRouter();
    // const classes = useStyles();


    const handleChange=()=> {
        router.push({pathname: '/'});
       }

    return(
        
         <div>  
               {/* <Grid container spacing={4}  direction="row" style={{backgroundColor:'blue'}}>
        <Grid item xs={12}>
                  <Paper> <b>Home Page</b> <button onClick={handleChange}  style={{marginLeft:'1100px',fontSize:'20px'}} >signout</button> </Paper>
        </Grid>
        </Grid>  */}

        <h2 style={{color:'blue' , fontSize:'40px',textAlign:'center'}}> Home Page </h2>
        <button onClick={handleChange}  style={{marginLeft:'650px',fontSize:'20px' ,backgroundColor:'blue',color:'white'}} >signout</button>

         </div> 
        
    )
}
export default  Home