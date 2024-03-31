import { Typography,Box,Grid } from '@mui/material';
import React from 'react'
const ContentComponent = () => {
  return (
    <Box
    display='flex'
    flexGrow={1}
    justifyContent='center'
    alignItems='center'
    sx={{border: '2px solid grey'}}
    >
        <Grid>
            <Typography>
                Content
            </Typography>
        </Grid>
        
    </Box>
  );
}

export default ContentComponent;