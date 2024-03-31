import React from 'react'
import { Drawer } from '@mui/material'
const Suggested = () => {
  return (
    <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      ></Drawer>
    
  );
}

export default Suggested
