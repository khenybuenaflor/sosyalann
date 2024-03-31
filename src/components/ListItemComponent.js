import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const ListItemComponent = ({ icon, primary }) => {
  return (
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={<Typography fontFamily='Salsa' fontWeight={18} fontSize={18}>{primary}</Typography>} />
    </ListItemButton>
  );
};

export default ListItemComponent;