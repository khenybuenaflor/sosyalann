import React from 'react'
import { Drawer, List, ListItem } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListItemComponent from './ListItemComponent';
import Logo from './Logo';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const DrawerComponent = ({submitLogout, activeUser}) => {
  return (
    <Drawer
        sx={{
          width: 200,
          
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            backgroundColor:'#E5964D',
            height: '70vh',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Logo color={'black'}/>
        <List>
          <ListItemComponent icon={<HomeOutlinedIcon />} primary="Home" />
          <ListItemComponent icon={<AccountCircleOutlinedIcon />}  primary="Profile" to='/profile' activeUser={activeUser} />
          <ListItemComponent icon={<SettingsOutlinedIcon />} primary="Settings" />
          <ListItemComponent icon={<LogoutOutlinedIcon />} button component={Link} primary="Logout" onclick={e => submitLogout(e)}/>
        </List>
      </Drawer>
  )
}

DrawerComponent.propTypes = {
  submitLogout:PropTypes.func.isRequired,
  activeUser:PropTypes.string.isRequired
}

export default DrawerComponent

