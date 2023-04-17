import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
const searchdata = [
    {
        id: 1,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 2,
        img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
    },
    {
        id: 3,
        img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    },
    {
        id: 4,
        img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    },
    {
        id: 5,
        img: 'https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38',
        
    },
    {
        id: 6,
        img: 'https://i.scdn.co/image/ab67706f000000023c5a4aaf5df054a9beeb3d82',
    },
    {
        id: 7,
        img: 'https://t.scdn.co/images/568f37f1cab54136939d63bd1f59d40c',
    },
    {
        id: 8,
        
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 9,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 10,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 11,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
        
    },
    {
        id: 12,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 13,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 14,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 15,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 18,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 19,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 20,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    }
    ,
    {
        id: 21,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 22,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 23,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 24,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 25,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 26,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 27,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 28,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 29,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 30,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 31,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    },
    {
        id: 32,
        img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    }
]
function Search() {
  return (
      <>
          <Box mt={4} width={"90%"} mx={"auto"}>
           
                  <Typography variant='h4' color={"white"}>
                     Browse All
                  </Typography>
                
              <Grid container spacing={2} mt={0.5}>
                  {searchdata.map((item) => {
                      return (
                          <Grid item md={1.5} xs={12} sm={3}>
                              <Card
                                  sx={{
                                      background: '#3e3d3d',padding:'5px' ,"&:hover": {
                                          boxShadow: "0 0 10px gray"
                                      }
                                  }}
                                
                              >   
                                    
                                  <Box width={"160px"}
                                      height={"160px"} ml={0.5}>
                                              <img
                                                  width={"auto"}
                                                  height={"100%"}
                                              src={item.img}
                                                  alt="music"
                                                  style={{
                                                    //   borderRadius: '10px',
                                                  }}
                                              />

                                          </Box>
                                     
                              </Card>
                          </Grid>
                      );
                  })}

              </Grid>
          </Box>
      </>
  )
}

export default Search