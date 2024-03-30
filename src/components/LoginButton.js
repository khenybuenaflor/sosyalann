import React from 'react'
import { Button } from '@mui/material'

const LoginButton = ({buttonText}) => {
  return (
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{height:50,fontSize:20,fontFamily:'Roboto Slab'}}
        >
        {buttonText}
    </Button>
  );
}

export default LoginButton
