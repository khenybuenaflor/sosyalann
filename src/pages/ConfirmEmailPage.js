//add code here
import React from 'react'
import PropTypes from 'prop-types'
import { Box,Grid, Typography,TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ConfirmEmailPage = ({
    OTP,
    setOTP,
    sendOTP,
    verifyOTP,
    CancelToggle,
}) => {

    

  return (
    <Box
    height={'100vh'}
    display='flex'
    alignItems='center'
    justifyContent='center'
    flexGrow={1}
    sx={{ border: '2px solid grey', padding:0, margin:0,overflowY:'auto', overflowX:'auto'}}
    >
        <Grid container direction='column' alignContent='center' justifyContent='center' sx={{ border: '2px solid grey', padding:0, margin:0,overflowY:'auto', overflowX:'auto'}} >
            <Grid container direction='column' alignItems='center' justifyContent='center'>
                <Grid item xs ={12}>
                    <Typography>
                        Please Verify/Thank you for Verifying
                    </Typography>
                </Grid>
                <Grid item xs = {12}>
                    <TextField 
                    id='otp'
                    name='otp'
                    type='numbers'
                    fullWidth
                    inputProps={{
                        style:{textAlign:'center'},
                        maxLength: 6,
                        pattern:'[0-9]*'
                    }}
                    value={OTP}
                    onChange={e => setOTP(e.target.value)}/>
                    console.log(setOTP);
                </Grid>
            </Grid>

            <Grid  container direction='row' justifyContent='flex-end'>
                
            </Grid>

            <Grid container direction='row' alignItems='center' justifyContent='center'>
                <Grid container item xs={12} justifyContent='flex-end'>
                    <Link onClick={e => sendOTP(e)}>
                        Send Code
                    </Link>
                </Grid>
                <Grid item>
                        <Button onClick={e => CancelToggle(e)}>Cancel</Button>
                </Grid>
                <Grid item>
                        <Button onClick={e => verifyOTP(e)}>Submit</Button>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

ConfirmEmailPage.propTypes = {
    CancelToggle:PropTypes.func.isRequired,
    OTP:PropTypes.string.isRequired,
    sendOTP:PropTypes.func.isRequired,
    setOTP:PropTypes.func.isRequired,
    verifyOTP:PropTypes.func.isRequired,
}

export default ConfirmEmailPage
