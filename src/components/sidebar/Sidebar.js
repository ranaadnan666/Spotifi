import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WaterIcon from '@mui/icons-material/Water';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, Outlet } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar,  Stack } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../footer/Footer';
import RightBar from './Rightbar';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SidebarMain = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const Side = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />,
      url: "/home"
    },
    {
      id: 2,
      title: "Search",
      icon: <SearchIcon />,
      url: "/search"
    },
    {
      id: 3,
      title: "Library",
      icon: <LibraryMusicIcon />,
      url: "/library"
    },
    {
      id: 4,
      title: "Liked Songs",
      icon: <FavoriteBorderIcon />,
      url: "/likesong"
    }
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#353535" }}>
        <Toolbar >
          <IconButton
          
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <KeyboardDoubleArrowRightIcon sx={{ color: 'white',display:{xs:"none",sm:"block"}}} />
          </IconButton>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} width={"100%"}>
            <Stack direction={"row"} alignItems={'center'} spacing={3} width={"100%"}>
              <Stack direction={"row"}>
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
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
                  placeholder='artists,song,podcasts'
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
              {/* <Box>
                <input style={{ padding: "8px", borderRadius: "20px", width: "100%", border: "1px solid gray" }} type='text' placeholder='artists,song,podcasts' />
              </Box> */}



            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              

            <Stack direction={"row"} alignItems={"center"} spacing={2} sx={{ backgroundColor: 'black' }} padding={"8px"} borderRadius={"20px"}>
              
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1600"
                sx={{ width: 40, height: 40 }}
              />
              <Typography fontWeight={"600"}>
                Kivilcim
              </Typography>
              </Stack>

              <Avatar sx={{ bgcolor: "black" }}>
                <NotificationsNoneIcon />
              </Avatar>
            {/* <NotificationsNoneIcon sx={{color:'white'}}/> */}
                {/* </Box> */}
         
                <RightBar/>
            
            </Stack>
          </Stack>


        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open} >
        <Box sx={{ backgroundColor: "#242121" }} height={"100vh"} >

          <DrawerHeader >
            <IconButton sx={{}}>
              <WaterIcon sx={{ fontSize: '30px', backgroundColor: 'white', borderRadius: '50px' }} />
            </IconButton>
            <Typography variant="h5" noWrap color="white">
              SpotiFy
            </Typography>
            <IconButton onClick={handleDrawerClose}  >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <KeyboardDoubleArrowLeftIcon sx={{ color: 'white' }} />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List >
            {Side.map((i) => (
              <ListItem key={i.id} disablePadding sx={{ display: 'block' }}>

                <NavLink style={{ textDecoration: "none", color: "white" }} to={i.url}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {i.icon}
                    </ListItemIcon>
                    <ListItemText primary={i.title} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ bgcolor: "white" }} />

          {/* playlist */}
          <Stack direction={"row"} justifyContent={"space-between"} mt={1} alignItems={"center"} sx={{}}>
            <Typography sx={{ color: 'white' }}>
              Playlist
            </Typography>
            <IconButton>
              <MoreHorizIcon sx={{ color: 'white' }} />
            </IconButton>

          </Stack>


        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop: 2, backgroundColor: " #353535", color: "white" }} >
        <DrawerHeader />
      
        <Outlet />
        {/*====== footer=========== */}
        <Divider sx={{ bgcolor: "white" }} />
        <Footer />
      </Box>
    
    </Box>
  );
}

export default SidebarMain