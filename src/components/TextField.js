import React from 'react'
import { TextField } from '@mui/material'

const TextFieldComponent = ({id,label,type}) => {
  return (

      <TextField
          required
          id={id}
          label={label}
          type={type}
          style={{margin:0,padding:0}}
          fullWidth
        />
    
    
  );
}

export default TextFieldComponent
