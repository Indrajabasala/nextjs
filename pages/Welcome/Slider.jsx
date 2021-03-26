import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Zoom } from 'react-slideshow-image';
import nature1 from '../../public/images/nature1.jpg';
import nature2 from '../../public/images/nature2.jpg';
import nature3 from '../../public/images/nature3.jpg';


const images = [nature1,nature2,nature3];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.2,
  arrows: true
};
//  const images=[]

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: 'white',
          backgroundColor:'#398ccc',
          fontSize:'35px'
      
        },
        Grid: {
            backgroundColor:'lightgreen'
        },
      
          }));
      function Slider() {
        const [value, onChange] = useState(new Date());
        const classes = useStyles();
   
    return(
        <div>
             {/* <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper className={classes.paper}> <b> <button style={{float:'left',
    height:'30px'}}> <DehazeIcon /> </button>Home Page</b> <PersonIcon style={{float:'right',
    height:'43px',width:'50px'  }}/>  </Paper>
   
        </Grid>
        </Grid> */}

  
  <div className="slide-container"> 
        <Zoom {...zoomOutProperties} >
          {
            images.map((each, index) => <img key={index} style={{ width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
        </div>
    )
}
export default Slider
