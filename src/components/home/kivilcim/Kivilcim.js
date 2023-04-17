import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicCard from '../../../layout/card/BasicCard'
import kividata from '../data'

const Kivilcim = () => {
    return (
        <>
            <Box mt={4} width={"90%"} mx={"auto"}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant='h4' color={"white"}>
                        Made For <span style={{
                            color: '#796acb'
                        }}> Kivilcim </span>
                    </Typography>
                    <Button sx={{
                        color: 'white'
                    }}>
                        See All
                    </Button>
                </Stack>
                <Grid container spacing={2} mt={0.5}>
                    {kividata.map((item) => {
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
            </Box>

        </>
    )
}

export default Kivilcim