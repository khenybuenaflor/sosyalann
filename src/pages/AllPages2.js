import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import HomePage from './HomePage'
import { Grid,Box,Typography} from '@mui/material'
import  LockOutlinedIcon  from '@mui/icons-material/LockOutlined'
import TextBox from '../components/TextBox';
import LoginButton from '../components/LoginButton'
import TextFieldComponent from '../components/TextField'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const AllPages2 = () => {
    const [currentUser,setCurrentUser]=useState();
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        client.get("/api/user/")
        .then(function(res){
            setCurrentUser(true);
        })
        .catch(function(error) {
            setCurrentUser(false);
        });
    },[]);

    function submitRegistration(e){
        e.preventDefault();
        client.post(
            "/api/register/",
            {
                first_name:first_name,
                last_name:last_name,
                email:email,
                username:username,
                password:password
            }
        ).then(function(res) {
            client.post(
              "/api/login/",
              {
                email: email,
                password: password
              }
            ).then(function(res) {
              setCurrentUser(true);
            });
          });
        }
    
    function submitLogin(e){
        e.preventDefault();
        client.post(
            "/api/login/",
            {
                email:email,
                password:password,
            }
        ).then(function(res) {
            setCurrentUser(true);
          });
    }

    function submitLogout(e){
        e.preventDefault();
        client.post(
            "/api/logout/",
            {withCredentials:true}
        ).then(function(res){
            setCurrentUser(false);
        });
    }

    if (currentUser) {
        return (
            <HomePage/>
            
        )
    }
    return (
        <Box sx={{flexGrow:1, justifyContent:'center', alignContent:'center', alignItems:'center'}} >
                <Grid container direction='row' spacing={2}   >
                    <Grid item 
                    md={7} 
                    lg={7}
                    justifyContent='center'
                    alignItems='center'
                    display={{xs:'none', sm:'none' ,md:'flex'}}
                    paddingRight={10}>
                        <TextBox/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        {/* //start here */}
                        <Box
                        height={'100vh'}
                        my={4}
                        display="flex"
                        justifyContent='flex-start'
                        alignItems='flex-start'
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid grey', padding:0, margin:0,overflowY:'auto', overflowX:'auto'}}
                        >
                            <Grid container direction='column' alignItems='center' justifyContent='center'>
                                <Grid item xs={12} container direction='column' justifyContent='flex-start' alignItems='center' paddingTop={15} paddingBottom={5}>
                                <Grid display={{xs:'block',sm:'block',md:'none'}}>
                                    <Typography fontFamily='Salsa' fontSize='50px' fontWeight='50px' color="#E5964D">
                                    SOSYALAN
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <LockOutlinedIcon sx={{fontSize:50}}/>
                                </Grid>
                                <Grid>
                                    <Typography paddingTop={2} fontFamily='Roboto Slab' fontSize={30}>
                                    Sign in
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid container direction='row' justifyContent='center' alignItems='center' >
                                <Grid item xs={12} padding={2.5}>
                                    <TextFieldComponent type='email' label='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} padding={2.5}>
                                    <TextFieldComponent type='password' label='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} padding={2.5}>
                                    <LoginButton buttonText='SIGN IN' onClick={submitLogin}/>
                                </Grid>
                                <Grid container direction='row' justifyContent='space-between'>
                                    <Grid padding={2.5} >
                                    <Typography fontFamily='Arial' fontSize={17}>
                                        <Link>
                                        Forgot Password?
                                        </Link>
                                    </Typography>
                                    </Grid>
                                    <Grid padding={2.5}>
                                    <Typography fontFamily='Arial' fontSize={17}> 
                                        Don't have an acount? <Link to='/register'>Sign Up</Link>
                                    </Typography>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* end here */}
                    </Grid>
                </Grid>
            </Box>
    )

}

export default AllPages2
