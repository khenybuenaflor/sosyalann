// import React, { useState } from 'react'
// import axios from 'axios'
// import PropTypes from 'prop-types'
// import { Grid, TextField, Typography } from '@mui/material'
// import 'bootstrap/dist/css/bootstrap.min.css'



// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

// const client = axios.create({
// baseURL: "http://192.168.218.91:8000"
// });

// const CreatePostPage = ({}) => {
//     const [title, setTitle] = useState('');
//     const [caption, setCaption] = useState('');


//     function createPost(e) {
//         e.preventDefault();
//         client.post(
//             "/api/createpost",
//             {
//                 title: title,
//                 caption:caption
//             }
//         ).then(response => {
            
//             console.log("Post created successfully:", response.data);
            
//         }).catch(error => {
            
//             console.error("Error creating post:", error);
           
//         });
//     }
    

    


//   return (
//     <form onSubmit={ e => createPost(e)}>
//         <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
//         <input type="text" className="form-control" id="title" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
//     </div>
//     <div className="mb-3">
//         <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
//         <textarea className="form-control" id="caption" rows="3" value={caption} onChange={e => setCaption(e.target.value)}></textarea>
//     </div>
//     <button type='submit'>
//         Submit
//     </button>
//     </form>
    
//   )
// }

// CreatePostPage.propTypes = 
// {
    
// }

// export default CreatePostPage