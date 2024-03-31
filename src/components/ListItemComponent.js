import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const ListItemComponent = ({ icon, primary }) => {
  return (
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

export default ListItemComponent;