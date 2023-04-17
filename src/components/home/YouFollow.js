import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicCard from '../../layout/card/BasicCard'
import { NavLink } from 'react-router-dom'
const followdata = [
    {
        id: 1,
        imgurl: require('../../images/home/kivi1.jpeg'),
        title: 'Rock Hard',
        discription: "Linkin Park along with today's Rock songs you need to hear"
    },
    {
        id: 2,
        imgurl: require('../../images/home/kivi2.jpeg'),
        title: 'New Rock',
        discription: 'The hardest songs, loud. Very loud. Cover: Greta Van Fleet'
    },
    {
        id: 3,
        imgurl: require('../../images/home/kivi3.jpeg'),
        title: 'New Alt',
        discription: "Linkin Park along with today's Rock songs you need to hear"
    },
    {
        id: 4,
        imgurl: require('../../images/home/kivi4.jpeg'),
        title: 'Rock This',
        discription: 'The hardest songs, loud. Very loud. Cover: Greta Van Fleet'
    },
    {
        id: 5,
        imgurl: require('../../images/home/kivi5.jpeg'),
        title: 'New Noise',
        discription: "Linkin Park along with today's Rock songs you need to hear"
    },
    {
        id: 6,
        imgurl: require('../../images/home/kivi6.jpeg'),
        title: 'Alt Now',
        discription: 'The hardest songs, loud. Very loud. Cover: Greta Van Fleet'
    }

]


const YouFollow = () => {
    return (
        <>
            <Box mt={4} width={"90%"} mx={"auto"}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant='h4' color={"white"}>
                        PlayList <span style={{
                            color: '#3d9efa'
                        }}> YouFollow </span>
                    </Typography>
                    <Button sx={{
                        color: 'white'
                    }}>
                        See All
                    </Button>
                </Stack>
                <NavLink to="/playlist" style={{textDecoration:"none"}}>
                <Grid container spacing={2} mt={0.5}>
                    {followdata.map((item) => {
                        return (
                            <Grid item md={2} xs={12} sm={6}>
                                <BasicCard
                                    image={item.imgurl}
                                    title={item.title}
                                    discription={item.discription}
                                />
                            </Grid>
                        );
                    })}

                </Grid>
                </NavLink>
            </Box>

        </>
    )
}
export default YouFollow