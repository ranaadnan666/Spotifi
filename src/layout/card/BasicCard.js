
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const BasicCard = (props) => {
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
                    <img
                        width={"100%"}
                        height={"200px"}
                        src={props.image}
                        alt="music"
                        style={{
                            borderRadius: '10px',
                        }}
                    />
                    {hover && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
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
                    <Typography gutterBottom variant="h5" component="div" color={"white"}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color={"white"}>
                        {props.discription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BasicCard;

 