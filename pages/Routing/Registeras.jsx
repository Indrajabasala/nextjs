import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router'

const useStyles = makeStyles((theme) => ({
   
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor:'#357aa1',
      fontSize:'30px'
  
    }
  }));
function Registeras(props) {
    const[state,setState]=useState([])
    const router = useRouter();

    // let history = useHistory();
    const classes = useStyles();
    const {
        query:{page}
      } = router
    // let history=window
 console.log('props..................:',page,router)

     const handleChange=(role)=> {
        router.push({pathname: `${page}`, query: { role }});
     };

    return(
        <div> 
          <div align="middle">
          <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper className={classes.paper}> <b>{page}  As</b>  </Paper>
        </Grid>
        </Grid> <br/> <br/>
              <h2 style={{color:'blue'}}> {page} As </h2> <br/><br/>
            <Button  variant="contained" style={{backgroundColor:"#398ccc"}}  onClick={() => handleChange('doctor')}  ><b>Doctor</b></Button> <br/> <br/>
            <Button variant="contained"style={{backgroundColor:"#398ccc"}}   onClick={() => handleChange('patient')}><b> Patient </b> </Button>

            </div>
        </div>
    )
}

export default Registeras