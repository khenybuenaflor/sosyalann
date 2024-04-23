import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import DrawerComponent from '../components/DrawerComponent';
import ContentComponent from '../components/Content';
import Suggested from '../components/Suggested';
import CreatePost from '../components/CreatePost';
import PropTypes from 'prop-types'
import axios from 'axios'
import Content from '../components/Content';

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;

  const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
  });


const HomePage = ({submitLogout,CancelToggle,activeUser}) => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        client.get(
        "/api/getpost"
        ).then (function(res){
            const data = res.data
            setPosts(data)
        })
    },[]);
    
    function getPost(){
        client.get(
            "/api/getpost"
            ).then (function(res){
                const data = res.data
                setPosts(data)
            },[]);
    }

    
  return (
    <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    flexGrow={1}>
        <Grid container direction='row'>
            <Grid item xs={3}>
                <DrawerComponent
                submitLogout={submitLogout}
                activeUser={activeUser}
                />    
            </Grid>
            <Grid item xs={6} container direction='column' padding={2}>
                <Grid>
                    <CreatePost
                    activeUser={activeUser}
                    fetchPost={getPost}
                    />
                </Grid>
                <Grid>
                    <Link onClick={e => CancelToggle(e)}>
                        verify EMAIl
                    </Link>
                </Grid>
                <Grid>
                    <Typography>
                        activeuse : {activeUser}
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs ={12} paddingBottom={2} paddingTop={2}>
                        <Content posts={posts}/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={3}>
                <Suggested/>
            </Grid>
        </Grid>
    </Box>
  );
}

HomePage.propTypes = {
    submitLogout:PropTypes.func.isRequired,
    CancelToggle:PropTypes.func.isRequired,
    activeUser:PropTypes.string.isRequired,
}

export default HomePage
