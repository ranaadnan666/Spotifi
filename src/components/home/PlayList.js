import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import PlayCard from '../../layout/playCard/PlayCard'
import { NavLink } from 'react-router-dom'
const showdata = [
    {
        id: 1,
        img1: require('../../images/home//show1.jpeg'),
        img2: require('../../images/home/kivi1.jpeg'),
        img3: require('../../images/home/kivi2.jpeg'),
        img4: require('../../images/home/show2.jpeg'),
        title: 'Shaadi Hits',
        follwor: '100follwor'
    },
    {
        id: 2,
        img1: require('../../images/home//show1.jpeg'),
        img2: require('../../images/home/kivi1.jpeg'),
        img3: require('../../images/home/show2.jpeg'),
        img4: require('../../images/home/kivi2.jpeg'),
        title: 'Mehndi Hits',
        follwor: '150follwor'
    },
    {
        id: 3,
        img1: require('../../images/home//show3.jpeg'),
        img2: require('../../images/home/kivi3.jpeg'),
        img3: require('../../images/home/show4.jpeg'),
        img4: require('../../images/home/kivi4.jpeg'),
        title: 'Shaadi Bhangra',
        follwor: '340follwor'
    },
    {
        id: 4,
        img1: require('../../images/home//show5.jpeg'),
        img2: require('../../images/home/kivi5.jpeg'),
        img3: require('../../images/home/show6.jpeg'),
        img4: require('../../images/home/kivi6.jpeg'),
        title: 'Rukhsati',
        follwor: '130follwor'
    },
    {
        id: 5,
        img1: require('../../images/home//show1.jpeg'),
        img2: require('../../images/home/show2.jpeg'),
        img3: require('../../images/home/show4.jpeg'),
        img4: require('../../images/home/show5.jpeg'),
        title: 'Baraat Entry',
        follwor: '150follwor'

    },
    {
        id: 6,
        img1: require('../../images/home//show1.jpeg'),
        img2: require('../../images/home/show2.jpeg'),
        img3: require('../../images/home/show4.jpeg'),
        img4: require('../../images/home/show5.jpeg'),
        title: 'Dance Party',
        follwor: '200follwor'
    }

]

const PlayList = () => {
    return (
        <>
            <Box mt={4} width={"90%"} mx={"auto"}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant='h4' color={"white"}>
                        Your <span style={{
                            color: '#ce5ea6'
                        }}> PlayList </span>
                    </Typography>
                    <Button sx={{
                        color: 'white'
                    }}>
                        See All
                    </Button>
                </Stack>

            <Grid container spacing={2} mt={0.5}>
                    {showdata.map((item) => {
                        return (
                            <Grid item md={2} xs={12} sm={6}>
                                <PlayCard
                                    pic1={item.img1}
                                    pic2={item.img2}
                                    pic3={item.img3}
                                    pic4={item.img4}
                                    title={item.title}
                                    follower={item.follwor}
                                />
                                    
                            
                            </Grid>
                        );
                    })}
                </Grid>
  
            </Box>

        </>
    )
}
export default PlayList
