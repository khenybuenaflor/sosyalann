import { Typography,Box,Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;

  const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
  });


const Content = ({posts}) => {
  return (
    <div>
      {posts.map(post =>(
          <Box
          display='flex'
          flexGrow={1}
          sx={{ border: '2px solid grey', backgroundColor:'rgba(229,150,77,0.43)' }}
          borderRadius='20px'
          height={100}
          paddingTop={2}
          paddingBottom={2}
        >
            <Grid  container direction='row' padding={5}>
              <Grid item xs={2}>
                Picture
              </Grid>
    
              <Grid item xs={8}>
                <Grid container direction='column'>
                  <Grid> 
                    <Typography variant='h6'>
                      {post.title}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography>
                      {post.caption}
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
      ))}
    </div>
  )
}

Content.propTypes = {
  posts:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption:PropTypes.string.isRequired
  })).isRequired
}

export default Content
