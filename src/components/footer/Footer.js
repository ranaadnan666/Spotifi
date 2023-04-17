import { BottomNavigation, Box, Grid, IconButton, Slider, Stack, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTheme } from '@mui/material/styles';
import RepeatIcon from '@mui/icons-material/Repeat';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
function Footer() {
    const theme = useTheme();
    return (
        <>
            <BottomNavigation
                sx={{
                    width: '100%',
                    bottom: 0,
                    height:'130px',
                    backgroundColor: " #353535",
                    color: "white" 
                }}

            >
                <Grid container spacing={4} width={" 95%"} mx="auto"   >
                    <Grid item  md='4' display={{xs:"none",lg:"block"}}>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Box sx={{width:'100px',height:'100px'}} mt={2} >
                                <img src="https://i.scdn.co/image/ab67706f000000023c5a4aaf5df054a9beeb3d82" alt="" style={{
                                    width: 'auto',
                                    height:'100%'
                                    
                                }} />
                            </Box>

                            <Stack>
                                <Typography variant='h5'>
                                    No One Knows
                                </Typography>
                                <Typography>
                                   Queens of the Stone Age
                                </Typography>
                            </Stack>
                       
                            <Box>
                                <FavoriteIcon sx={{ color:'#7DDB6A'}} />
                            </Box>
                            <Box>
                                <AddCircleOutlineIcon sx={{ color:'#b3b3b3'}} />
                            </Box>
                            <Box>
                                <PlaylistPlayIcon sx={{ color: '#b3b3b3' }} />
                            </Box>


                        </Stack>
                    </Grid>
                    <Grid item md='8' mx={"auto"}>
                        <Stack direction={"column"} alignItems={"center"} mt={2}>
                            <Stack direction={"row"} sx={{ alignItems: 'center' }} spacing={2}>
                                <IconButton>
                                    <ScreenRotationAltIcon sx={{ color: '#1db954' }} />
                                </IconButton>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: '#b3b3b3' }} /> : <SkipPreviousIcon sx={{ color: '#b3b3b3' }} />}
                                </IconButton>
                                <IconButton aria-label="play/pause" sx={{
                                    backgroundColor: 'white', ":hover": {
                                        backgroundColor: 'white'
                                    }
                                }}>
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: '#b3b3b3' }} /> : <SkipNextIcon sx={{ color: '#b3b3b3' }} />}
                                </IconButton>
                                <IconButton>
                                    <RepeatIcon sx={{ color: '#b3b3b3' }} />
                                </IconButton>
                            </Stack>
                            <Stack direction={"row"} width={"100%"} spacing={2} alignItems={"center"}>
                                <Typography>
                                    1:42
                                </Typography>
                                <Box sx={{ width: '80%'}}>
                                
                                    <Slider
                                        aria-label="Playing line"
                                        defaultValue={30}
                                        sx={{
                                            color: '#cfcf58'
                                        }}
                                    />
                                </Box>
                                <Typography>
                                    4:00
                                </Typography>
                            </Stack>
                            
                        </Stack>

                    </Grid>
                </Grid>
               
                
            </BottomNavigation>
        </>
    )
}

export default Footer