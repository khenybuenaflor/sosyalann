import { Typography,Grid,Box } from '@mui/material';
import React from 'react'

const CreatePost = () => {
  return (
   <Box border='2px solid grey' borderRadius='20px' height={110}>
    <Grid container direction='row'>
        <Grid>
            <Typography>
                Picture
            </Typography>
        </Grid>
        <Grid>
            <Grid container direction='column'>
                <Grid>
                    <Typography>
                        What's on your plate?
                    </Typography>
                </Grid>
                <Grid container direction='row'>
                    <Grid>
                        Photo
                    </Grid>
                    <Grid>
                        Video
                    </Grid>
                    <Grid>
                        Post
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    </Grid>
   </Box>
  );
}

export default CreatePost
