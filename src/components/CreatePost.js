import { Typography,Grid,Box, Divider, TextField, Button } from '@mui/material';
import {React, useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CreatePostDialog from '../pages/CreatePostDialog';
import GestureIcon from '@mui/icons-material/Gesture';
const CreatePost = ({
    activeUser,
    fetchPost
}) => {

    const [isDialogueOpen, setDialogueOpen] = useState(false);

    const handleOpenDialogue = () => {
        setDialogueOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogueOpen(false);
    };

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
                    <Button onClick={handleOpenDialogue} variant='text' autoFocus startIcon={<GestureIcon/>}>
                        Threads
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        {isDialogueOpen && (
        <CreatePostDialog open={isDialogueOpen} onClose={handleCloseDialog} fetchPost={fetchPost} />
      )}
   </Box>
  );
}

CreatePost.propTypes = {
    activeUser:PropTypes.string.isRequired,
    fetchPost:PropTypes.func.isRequired
}

export default CreatePost

