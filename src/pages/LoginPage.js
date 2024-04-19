import React from 'react'
import { Grid,Box } from '@mui/material'
import TextBox from '../components/TextBox';
import LoginBox from '../components/LoginBox';
import PropTypes from 'prop-types'

//Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const LoginPage = ({
  toggleRegistrationMode,
  submitLogin,
  setEmail,
  setPassword,
  email,
  password,
  checkUser
}) => {
  return (
    <div>
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
                <LoginBox
                toggleRegistrationMode={toggleRegistrationMode}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                submitLogin={submitLogin}
                checkUser={checkUser}
                />
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

LoginPage.propTypes = {
  toggleRegistrationMode:PropTypes.func.isRequired,
  submitLogin:PropTypes.func.isRequired,
  setEmail:PropTypes.func.isRequired,
  setPassword:PropTypes.func.isRequired,
  email:PropTypes.string.isRequired,
  password:PropTypes.string.isRequired,
  checkUser:PropTypes.func.isRequired
}

export default LoginPage

