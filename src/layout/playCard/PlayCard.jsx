import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const PlayCard = (props) => {
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverLeave = () => {
    setHover(false);
  };

  return (
    <Card
      sx={{
        background: '#3e3d3d', "&:hover": {
          boxShadow: "0 0 10px gray"
        }
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      <CardActionArea>
        <Box padding={"10px"}>
          <Stack direction={"row"} >
            <Stack width={"50%"}>
              <img style={{ width: "100%", height: "100%" }} src={props.pic1} alt="" />
            </Stack>
            <Stack width={"50%"}>
              <img style={{ width: "100%", height: "100%" }} src={props.pic2} alt="" />

            </Stack>
          </Stack>
          <Stack direction={"row"}>
            <Stack width={"50%"}>
              <img style={{ width: "100%", height: "100%" }} src={props.pic3} alt="" />

            </Stack>
            <Stack width={"50%"}>
              <img style={{ width: "100%", height: "100%" }} src={props.pic4} alt="" />

            </Stack>

          </Stack>
          {hover && (
            <Box
              sx={{
                position: 'absolute',
                top: '47%',
                left: '80%',
                transform: 'translate(-50%, -50%)',
                background: '#7DDB6A',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlayArrowIcon sx={{ color: 'black', fontSize: 40 }} />
            </Box>
          )}
        </Box>
        <CardContent>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography gutterBottom variant="h5" component="div" color={"white"}>
              {props.title}
            </Typography>
            <p style={{ color: 'white' }}>{props.icon}</p>
          </Stack>
          <Typography variant="body2" color={"white"}>
            {props.follower}
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default PlayCard