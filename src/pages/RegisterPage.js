import { Box, Grid, TextField, Typography } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import TextFieldComponent from '../components/TextField';
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const RegisterPage = ({
    toggleRegistrationMode,
    submitRegistration,
    setEmail,
    setUsername,
    setPassword,
    email,
    username,
    password
}) => {
  return (
    <div>
      <form onSubmit={e => submitRegistration(e)}>
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
                        <Grid item xs={12} padding={2}>
                            <TextField id='email' label='Email Address' type='text' name="email" value={email} onChange={e => setEmail(e.target.value)}  style={{margin:0,padding:0}}
                            fullWidth/>
                            {/* <TextFieldComponent id='email' label='Email Address' type='text' name="email" value={email} onChange={e => setEmail(e.target.value)}  /> */}
                        </Grid>
                        <Grid item xs={12} padding={2}>
                            <TextField id='username' label='Username' type='text' name="username" value={username} onChange={e => setUsername(e.target.value)} style={{margin:0,padding:0}}
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} padding={2}>
                            <TextField id='password' label='Password' type='password' name="password" value={password} onChange={e => setPassword(e.target.value)} style={{margin:0,padding:0}}
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} padding={2}>
                            <LoginButton buttonText='SIGN UP' type="submit"/>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='flex-end'>
                        <Grid>
                            <Typography>
                                Already have an account? <Link onClick={e => toggleRegistrationMode(e)}>Sign In</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </form>
    </div>
  )
}

RegisterPage.propTypes = {
    toggleRegistrationMode:PropTypes.func.isRequired,
    submitRegistration:PropTypes.func.isRequired,
    setEmail:PropTypes.func.isRequired, 
    setPassword:PropTypes.func.isRequired, 
    setUsername:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
}

export default RegisterPage

