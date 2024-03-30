import React from 'react'
import { Box,Grid, Typography} from '@mui/material'
import TextFieldComponent from './TextField';
import  LockOutlinedIcon  from '@mui/icons-material/LockOutlined'
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';

//Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const LoginBox = () => {
  return (
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
            <TextFieldComponent type='text' label='Username'/>
          </Grid>
          <Grid item xs={12} padding={2.5}>
            <TextFieldComponent type='password' label='Password'/>
          </Grid>
          <Grid item xs={12} padding={2.5}>
            <LoginButton buttonText='SIGN IN'/>
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
                Don't have an acount? <Link>Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>


      </Grid>
    </Box>
  );
}

export default LoginBox
