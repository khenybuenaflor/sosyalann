import React from 'react'
import { TextField } from '@mui/material'

const TextFieldComponent = ({label,type}) => {
  return (

      <TextField
          required
          id="outlined-required"
          label={label}
          type={type}
          style={{margin:0,padding:0}}
          fullWidth
        />
    
    
  );
}

export default TextFieldComponent
