import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const  Activity=()=> {
  return (
    <List sx={{ width: '100%', maxWidth: 360,backgroundColor: " #353535", color: "white" }}>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item)=>{
            return(
                <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1297218844/photo/full-length-body-size-photo-of-female-pop-star-singing-song-keeping-mic-dancing-on-stage.jpg?b=1&s=612x612&w=0&k=20&c=qG0gOBswsKLrk2TE7IL38o1CYRCMTJqb0URFDPV2zLY=" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',color:"white"}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              <br></br>
              <span style={{color: "white"}}>I'll be in your …</span>

            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
       )
        })
    }
    </List>
  );
}

export default Activity