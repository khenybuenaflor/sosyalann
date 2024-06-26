import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import DrawerComponent from '../components/DrawerComponent';
import ContentComponent from '../components/Content';
import Suggested from '../components/Suggested';
import CreatePost from '../components/CreatePost';
import PropTypes from 'prop-types'

const HomePageVer = ({submitLogout,CancelToggle}) => {
    const renderContentComponents = ()=>{
        const components=[];
        for (let i = 0;i<20;i++){
            components.push(
            <Grid item key={i} paddingTop={2} paddingBottom={2}>
                <ContentComponent />
            </Grid>
            );
        }
        return components;
    }

  return (
    <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    flexGrow={1}>
        <Grid container direction='row'>
            <Grid item xs={3}>
                <DrawerComponent
                submitLogout={submitLogout}
                />
            </Grid>
            <Grid item xs={6} container direction='column' padding={2}>
                <Grid>
                    <CreatePost/>
                </Grid>
                <Grid>
                    {renderContentComponents()}
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Suggested/>
            </Grid>
        </Grid>
    </Box>
  )
}

HomePageVer.propTypes = {
    submitLogout:PropTypes.func.isRequired,
    CancelToggle:PropTypes.func.isRequired
}

export default HomePageVer

