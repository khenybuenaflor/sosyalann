import { Typography,Box,Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;

  const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
  });

const ContentComponent = () => {
  
  const[posts, setPosts] = useState([]);

  useEffect(()=>{
    client.get("/api/getpost")
    .then(function(res){
        setPosts(res.data);
    })
    .catch(function(error) {
        console.error("Error", error);
    });
  }, []);

  return (
    <Box
      display='flex'
      flexGrow={1}
      sx={{ border: '2px solid grey' }}
      borderRadius='20px'
      height={327}
      paddingTop={2}
      paddingBottom={2}
    >
      {posts.map((post, index) => (
        <Grid key={index} container direction='row' padding={5}>

          <Grid item xs={2}>
            Picture
          </Grid>

          <Grid item xs={8}>
            <Grid container direction='column'>
              <Grid>
                <Typography>
                  {post.title}
                </Typography>
                <Typography>
                  {post.userID}
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                  {post.caption}
                </Typography>
              </Grid>
              <Grid>
                <Box border={'2px solid grey'} borderRadius='10px' height='200px'>
                  {/* Your post content */}
                </Box>
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
      ))}
    </Box>
  );
}

export default ContentComponent;