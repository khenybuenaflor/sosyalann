import React from 'react'
import { Box, Grid, Typography } from '@mui/material'   
import '../App.css'
const TextBox = () => {
  return (
    <Box
      height={200}
      my={4}
      display="flex"
      alignItems="flex-start"
      gap={4}
      p={2}
    >
      <Grid container direction='column'>
        <Typography style={{fontFamily:'Salsa',fontSize:'80px',fontWeight:'400px',color:"#E5964D"}}>
          SOSYALAN
        </Typography>
        <Typography style={{fontFamily:'Roboto Slab',fontSize:'30px',fontWeight:'200px'}}>
          Dish up connections. Share your meals, <br/> 
          stories, and food adventures with friends <br/>
          and the world.
        </Typography>
      </Grid>
      
      
    </Box>
  );
}

export default TextBox
