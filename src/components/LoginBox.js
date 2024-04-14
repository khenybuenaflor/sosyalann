import React from 'react'
import { Box,Grid, Typography,TextField} from '@mui/material'
import TextFieldComponent from './TextField';
import  LockOutlinedIcon  from '@mui/icons-material/LockOutlined'
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

//Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px


const LoginBox = ({
  toggleRegistrationMode,
  submitLogin,
  setEmail,
  setPassword,
  email,
  password,
}) => {
  return (
    <div>
      <form onSubmit={e => submitLogin(e)}>
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
              <TextField id='email' label='Email Address' type='text' name="email" value={email} onChange={e => setEmail(e.target.value)}  style={{margin:0,padding:0}}
              fullWidth/>
              </Grid>
              <Grid item xs={12} padding={2.5}>
              <TextField id='password' label='Password' type='password' name="password" value={password} onChange={e => setPassword(e.target.value)} style={{margin:0,padding:0}}
              fullWidth />
              </Grid>
              <Grid item xs={12} padding={2.5}>
                <LoginButton buttonText='SIGN IN' type="submit"/>
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
                    Don't have an acount? <Link onClick={e => toggleRegistrationMode(e)}>Sign Up</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  )
}

LoginBox.propTypes = {
  toggleRegistrationMode:PropTypes.func.isRequired,
  submitLogin:PropTypes.func.isRequired,
  setEmail:PropTypes.func.isRequired,
  setPassword:PropTypes.func.isRequired,
  email:PropTypes.string.isRequired,
  password:PropTypes.string.isRequired
}

export default LoginBox

