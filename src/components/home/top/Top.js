import { Fab, Grid, Stack } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PeopleIcon from '@mui/icons-material/People';

const Top = () => {
    return (
        <>
            <Grid container width={"90%"} mx={"auto"} spacing={3}>
                {/*==================== liked Song =============*/}
                <Grid item xs={12} sm={6} md={4}>
                    <Fab variant="extended" color="primary" aria-label="add" sx={{
                        width: { xs: '90%', sm: '80%', md: '50%' },
                        textAlign: 'center',
                        backgroundColor: '#4b4a4a',
                        ":hover": {
                            backgroundColor: '#4b4a4a'
                        },
                        gap: '25px',
                        height: '60px'
                    }}>
                        <Stack sx={{
                            backgroundColor: '#c65faa',
                            padding: '15px',
                            marginLeft: '-110px',
                            borderRadius: '50px'
                        }} alignItems={"center"}>
                            <FavoriteIcon sx={{ fontSize: { xs: '24px', sm: '30px' } }} />
                        </Stack>
                        <h4>liked Song</h4>
                    </Fab>
                </Grid>

                {/*==================== Recently Played =============*/}
                <Grid item xs={12} sm={6} md={4}>
                    <Fab variant="extended" color="primary" aria-label="add" sx={{
                        width: { xs: '90%', sm: '90%', md: '60%' },
                        textAlign: 'center',
                        backgroundColor: '#4b4a4a',
                        ":hover": {
                            backgroundColor: '#4b4a4a'
                        },
                        gap: '25px',
                        height: '60px'
                    }}>
                        <Stack sx={{
                            backgroundColor: '#5f7ce8',
                            padding: '15px',
                            marginLeft: { xs: '-70px', sm: '-110px' },
                            borderRadius: '50px'
                        }} alignItems={"center"}>
                            <AudiotrackIcon sx={{ fontSize: { xs: '24px', sm: '30px' } }} />
                        </Stack>
                        <h4>Recently Played</h4>
                    </Fab>
                </Grid>

                {/*==================== Friends Played =============*/}
                <Grid item xs={12} sm={6} md={4}>
                    <Fab variant="extended" color="primary" aria-label="add" sx={{
                        width: { xs: '90%', sm: '90%', md: '60%' },
                        textAlign: 'center',
                        backgroundColor: '#4b4a4a',
                        ":hover": {
                            backgroundColor: '#4b4a4a'
                        },
                        gap: '25px',
                        height: '60px'
                    }}>
                        <Stack sx={{
                            backgroundColor: '#3da0fa',
                            padding: '15px',
                            marginLeft: { xs: '-70px', sm: '-110px' },
                            borderRadius: '50px'
                        }} alignItems={"center"}>
                            <PeopleIcon sx={{ fontSize: { xs: '24px', sm: '30px' } }} />
                        </Stack>
                        <h4>Friends Played</h4>
                    </Fab>
                </Grid>
            </Grid>
        </>
    )
}

export default Top;
