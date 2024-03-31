import React from 'react'
import { Drawer } from '@mui/material'
const DrawerComponent = () => {
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
        anchor="left"
      ></Drawer>
  );
}

export default DrawerComponent
