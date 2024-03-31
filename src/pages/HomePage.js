import React from 'react'
import { Box, Grid } from '@mui/material'
import DrawerComponent from '../components/DrawerComponent';
import ContentComponent from '../components/Content';
import Suggested from '../components/Suggested';

const HomePage = () => {
  return (
    <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    flexGrow={1}>
        <Grid container direction='row'>
            <Grid item xs={3}>
                <DrawerComponent/>
            </Grid>
            <Grid item xs={6} container direction='column'>
                <Grid>
                    <ContentComponent/>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Suggested/>
            </Grid>
        </Grid>

    </Box>
  );
}

export default HomePage
