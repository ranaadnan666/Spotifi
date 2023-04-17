import { Avatar, Box, Button, Grid, List, ListItem,ListItemText,  Stack,  Typography } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import BasicCard from '../../layout/card/BasicCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import img from "../../../src/images/grp.avif"


const songs = [
    {
        id: 1,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 2,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 3,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    {
        id: 4,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 5,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 6,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    {
        id: 7,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 8,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 9,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    {
        id: 10,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 11,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 12,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    {
        id: 13,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 14,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 15,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    {
        id: 18,
        title: "Friday I'm in love",

        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',
        viwers: "16,203,453",
        duration: "4:02",
    },
    {
        id: 19,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1255078388/photo/woman-in-raincoat.jpg?b=1&s=612x612&w=0&k=20&c=aTOxIifdxZ2WDXBL8F7a2VzGakuwRJhQ9hnXqgp-HWI=',

        viwers: "16,203,453",
        duration: "3:23",
    },
    {
        id: 20,
        title: "Friday I'm in love",
        img: 'https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=',

        viwers: "16,203,453",
        duration: "3:18",
    },
    // add more songs here
];


const showdata = [
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
    }

]
const Artist = (props) => {

    return (
        <>
            <div style={{ position: 'relative' }}>
                <img
                    src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Artist"
                    style={{
                        width: '100%',
                        height: '40vh',
                        objectFit: 'cover',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '40vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                {
                    props.title==="playlist" ?
                    <>
                    <Stack direction={"row"} width={"70%"} mx={"auto"} columnGap={6} alignItems={"center"}>
                <Box sx={{width:"170px",height:"120px"}}>
                <img style={{width:"100%",height:"100%"}} src={img} />
                </Box>
                  <Stack direction={"column"}>
                   <p >PlayList</p>
                   <h1 style={{padding:"0",margin:"0"}}>Friends Playlists</h1>
                   <p style={{width:"50%"}}>Enjoy millions of the latest Android apps, games, music, movies, TV, books, magazines & more. Anytime, anywhere, across your devices.</p>
                  </Stack>
                    </Stack>
                    </>
                    :
                  <>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <VerifiedIcon sx={{ color: '#00A3FF' }} />
                    <Typography variant="body1" style={{ color: '#fff' }}>
                        Verified Artist
                    </Typography>
                </Stack>

                <Typography variant="h2" style={{ color: '#fff', marginBottom: '1rem', fontWeight: '800' }}>
                    The Cure
                </Typography>
                <Typography variant="body1" style={{ color: '#fff' }}>
                    11,083.243 monthly listner
                </Typography>
                  </>
                }
                </div>
            </div>

            <Stack direction={"row"} alignItems={"center"} width={"95%"} mx="auto" justifyContent={"space-between"}>
                <Stack direction={"row"} alignItems={"center"} spacing={5}>
                    <Box
                        sx={{
                            background: '#7DDB6A',

                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}
                    >
                        <PlayArrowIcon sx={{ color: 'white', fontSize: 40 }} />
                    </Box>
                    {
                props.title ==="playlist" ?
            <>
                 <FavoriteBorderIcon/> 
                 <DownloadForOfflineIcon/>
            </> : <Button variant="outlined">Follow</Button>
                    }
                    

                    <MoreHorizIcon sx={{ color: 'white', fontSize: '70px' }} />
                </Stack>
                <Box style={{ position: "relative" }}>
                    <input
                        style={{
                            padding: "8px",
                            borderRadius: "20px",
                            width: "100%",
                            border: "1px solid gray",
                            paddingLeft: "40px" // Add left padding to make space for the icon
                        }}
                        type='text'
                        placeholder='Albums, singles or songs'
                    />
                    <SearchIcon
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            color: "gray",
                            cursor: "pointer"
                        }}

                    />
                </Box>
            </Stack>

            {/* popular liked and other */}
            <Grid container width={"95%"} mx="auto" mt={3} spacing={4}>
                <Grid item md="8" xs="12" >
                    <Typography variant="h4">Popular</Typography>
                    <List sx={{ width: '100%' }}>
                        {songs.map((song) => (
                            <ListItem key={song.id}>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
                                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                        <Typography>
                                            {song.id}
                                        </Typography>
                                        <Box>
                                            <img src={song.img} width={"50px"} height={"40px"} alt="img" />
                                        </Box>
                                        <Typography variant='h6'>
                                            {song.title}
                                        </Typography>

                                    </Stack>
                                    <Typography>
                                        {song.viwers}
                                    </Typography>
                                    <Typography>
                                        {song.duration}
                                    </Typography>
                                </Stack>
                            </ListItem>
                        ))}
                    </List>


                </Grid>
                <Grid item md="4" xs="12">
                    
                    <Grid container spacing={2} mt={0.5}>
                        {
                        props.title ==="playlist" ? 
                    


    <List sx={{marginLeft:"50px" ,width: '100%', maxWidth: 450 ,marginTop:"30px"}}>
    {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item)=>{
            return(
                <>
                <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=" />
                </ListItemAvatar>
                <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} width={"80%"}>
                <ListItemText
                  primary="Brunch this weekend?"
                />
                <span>6;19</span>
                </Stack>
                
              </ListItem>
              <Divider variant="inset" component="li" />
              </>
            )
        })
    }
    </List>
:
<>
<Typography variant="h4">Liked Songs</Typography>

                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Box>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                sx={{ width: 200, height: 200 }}
                            />
                           
                            
                            
                        </Box>
                        <Box>
                            <Typography variant='h5' fontWeight={"700"}>
                                You've  liked 4 videos
                            </Typography>
                            <Typography>
                               By The Care
                            </Typography>
                            
                        </Box>
                       
                    </Stack>
                    <Typography variant="h4">Featuring</Typography>
{showdata.map((item) => {
    return (
        <Grid item md={6} xs={12} sm={12}>
            <BasicCard
                image={item.imgurl}
                title={item.title}
          
            />
        </Grid>
    );
})}</>

                        }
                    

                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};

export default Artist;
