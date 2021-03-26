import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Home() {

    const handleChange=()=> {
        history.push({pathname: '/'});
       }

    return(
        <div>
              <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper> <b>Home Page</b> <button onClick={handleChange}  style={{marginLeft:'1000px',fontSize:'20px'}} >signout</button> </Paper>
        </Grid>
        </Grid>

        </div>
    )
}
export default  Home