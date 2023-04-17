import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicCard from '../../layout/card/BasicCard'
import { NavLink } from 'react-router-dom'
const showartist = [
    {
        id: 1,
        imgurl: require('../../images/home//show1.jpeg'),
        title: 'Shaadi Hits',
    },
    {
        id: 2,
        imgurl: require('../../images/home/show2.jpeg'),
        title: 'Mehndi Hits',
    },
    {
        id: 3,
        imgurl: require('../../images/home/show3.jpeg'),
        title: 'Shaadi Bhangra',
    },
    {
        id: 4,
        imgurl: require('../../images/home/show4.jpeg'),
        title: 'Rukhsati',
    },
    {
        id: 5,
        imgurl: require('../../images/home/show5.jpeg'),
        title: 'Baraat Entry',

    },
    {
        id: 6,
        imgurl: require('../../images/home/show6.jpeg'),
        title: 'Dance Party',
    }

]


const Artist = () => {
    return (
        <>
            <Box mt={4} width={"90%"} mx={"auto"} pb={2}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant='h4' color={"white"}>
                        Suggested <span style={{
                            color: '#e25c71'
                        }}> Artist </span>
                    </Typography>
                    <Button sx={{
                        color: 'white'
                    }}>
                        See All
                    </Button>
                </Stack>
                <Grid container spacing={2} mt={0.5}>
                    {showartist.map((item) => {
                        return (
                            <Grid item md={2} xs={12} sm={6}>
                                <NavLink to={"/artist"} style={{textDecoration:'none'}}>
                                <BasicCard
                                    image={item.imgurl}
                                    title={item.title}
                                    discription={item.discription}
                                    />
                                </NavLink>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>

        </>
    )
}
export default Artist
