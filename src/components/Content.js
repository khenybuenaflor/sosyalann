import { Typography,Box,Grid } from '@mui/material';
import React from 'react'
const ContentComponent = () => {
  return (
    <Box
    display='flex'
    flexGrow={1}
    sx={{border: '2px solid grey'}}
    borderRadius='20px'
    height={327}
    paddingTop={2}
    paddingBottom={2}
    >
        <Grid container direction='row' padding={5}>


          <Grid item xs={2}>
            Picture
          </Grid>


          <Grid item xs={8}>
            <Grid container direction='column'>
              <Grid>
                <Typography>
                  Name
                </Typography>
                <Typography>
                  userID
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                  Caption 
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                    <Box border={'2px solid grey'} borderRadius='10px' height='200px'>

                    </Box> 
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={2} container alignItems='center' justifyItems='flex-end' justifyContent='flex-end'>
            <Grid container direction='column' alignItems='flex-end'>
              <Grid>
                icon
              </Grid>
              <Grid>
                icon
              </Grid>
              <Grid>
                icon
              </Grid>
              <Grid>
                icon
              </Grid>
            </Grid>
          </Grid>


        </Grid>
    </Box>
  );
}

export default ContentComponent;