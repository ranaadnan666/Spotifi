import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Activity from '../activity/Activity';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';

const RightBar = () => {
    const navigate=useNavigate()
 
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
      setOpen(!true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor) => (event) => {
    setState({ ...state, [anchor]: !state[anchor] });
  };
React.useEffect(()=>{
    navigate("/home")
},[])
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,marginTop:"50px"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Activity/>
      </List>
      <Divider />
      <List>
<Activity/>
      </List>
    </Box>
  );

  return (
    <div >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
      
          <Button sx={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
            {state[anchor] ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default RightBar