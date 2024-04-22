import { Typography,Grid,Box, Divider, TextField } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types'

const CreatePost = ({
    activeUser
}) => {
  return (
    <Box border='2px solid grey' borderRadius='20px' height={110} alignItems='center' alignContent='center'>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
            <Grid>
                <Typography>
                    Picture
                </Typography>
            </Grid>
            <Grid>
                <Typography>
                    What's on your plate {activeUser} ?
                </Typography>
                {/* <TextField id='post' label={`What's on your plate ${activeUser} ?`} disabled/> */}
            </Grid>
            <Grid item xs={12}>
                <Divider variant='middle' component="div" />
            </Grid>
            <Grid container direction='row' justifyContent='space-evenly'>
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
   </Box>
  );
}

CreatePost.propTypes = {
    activeUser:PropTypes.string.isRequired
}

export default CreatePost

