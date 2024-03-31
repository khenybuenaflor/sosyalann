import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import TextFieldComponent from '../components/TextField';
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom'


const RegisterPage = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexGrow:1, border:'2px' ,xs:12 ,overflowY:'auto', overflowX:'auto', my:4,mx:4}}>
        <Grid width={700} alignItems='center' justifyContent='center'>
            <Grid container direction ='column' alignItems='center' paddingTop={5}>
                <Grid>
                    <Typography fontFamily='Salsa' fontSize='50px' fontWeight='50px' paddingBottom={2}>
                        SOSYALAN
                    </Typography>
                </Grid>
                <Grid paddingBottom={1}>
                    <LockOutlined sx={{fontSize:50}}/>
                </Grid>
                <Grid paddingBottom={2}>
                    <Typography fontFamily='Roboto Slab' fontSize={30}>
                        Sign Up
                    </Typography>
                </Grid>
            </Grid>
            
            <Grid container direction='row'>
                <Grid item xs={12} sm={6} padding={2}>
                    <TextFieldComponent label="First Name" type='text'/>
                </Grid >
                <Grid item xs={12} sm={6} padding={2}>
                    <TextFieldComponent label='Last Name' type='text'/>
                </Grid>
                <Grid item xs={12} padding={2}>
                    <TextFieldComponent label='Email Address' type='text'/>
                </Grid>
                <Grid item xs={12} padding={2}>
                    <TextFieldComponent label='Password' type='password'/>
                </Grid>
                <Grid item xs={12} padding={2}>
                    <LoginButton buttonText='SIGN UP'/>
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='flex-end'>
                <Grid>
                    <Typography>
                        Already have an account? <Link to='/'>Sign In</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}

export default RegisterPage
