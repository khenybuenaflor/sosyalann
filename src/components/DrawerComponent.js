import React from 'react'
import { Drawer, List } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListItemComponent from './ListItemComponent';
import Logo from './Logo';

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
      >
        <Logo />
        <List>
          <ListItemComponent icon={<HomeOutlinedIcon />} primary="Home" />
          <ListItemComponent icon={<AccountCircleOutlinedIcon />} primary="Profile" />
          <ListItemComponent icon={<SettingsOutlinedIcon />} primary="Settings" />
          <ListItemComponent icon={<LogoutOutlinedIcon />} primary="Logout" />
        </List>
      </Drawer>
  );
}

export default DrawerComponent
