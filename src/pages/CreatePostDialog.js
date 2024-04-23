import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, 
         Divider, 
         DialogTitle, 
         DialogContent, 
         DialogActions, 
         Button,
         useMediaQuery, 
         TextField} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MaxHeightTextarea from '../components/TextAreaDialog';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
baseURL: "http://127.0.0.1:8000"
});

const CreatePostDialog = ({ open, onClose, fetchPost }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    
    const textTitleState = (e) => {
        const value = e.target.value;
        setTitle(value);
        setIsButtonDisabled(value === '')
    }
    

    const textCaptionState = (e) => {
        const value = e.target.value;
        setCaption(value);
        setIsButtonDisabled(value === '');
    };


    function createPost(e) {
        e.preventDefault();
        client.post(
            "/api/createpost",
            {
                title: title,
                caption:caption
            }
        ).then(response => {
            
            console.log("Post created successfully:", response.data);
            fetchPost()
        }).catch(error => {
            
            console.error("Error creating post:", error);
            
        });
    }

    

    function handleCloseandPostButton(e){
        createPost(e);
        onClose();
        console.log(caption)
    }

    

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{textAlign:'center'}}>
          {"Create Post"}
        </DialogTitle>
        <Divider variant='middle' component="div" />
        <DialogContent>
        <TextField label={'Title'} value={title} onChange={textTitleState} id="margin-dense" margin="dense" fullWidth />
        </DialogContent>
        <DialogContent>
            <MaxHeightTextarea fullWidth value={caption} onChange={textCaptionState}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus  variant="text" startIcon={<DeleteIcon />}>
            Cancel
          </Button>
          <Button onClick={handleCloseandPostButton} disabled={isButtonDisabled}  autoFocus variant="text" startIcon={<SendIcon/>}>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

CreatePostDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchPost:PropTypes.func.isRequired
}

export default CreatePostDialog;
