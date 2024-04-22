import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const ListItemComponent = ({ icon, primary,onclick }) => {
  return (
    <ListItemButton onclick={onclick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={<Typography fontFamily='Salsa' fontWeight={18} fontSize={18}>{primary}</Typography>} />
    </ListItemButton>
  );
};

export default ListItemComponent;