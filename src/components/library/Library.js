import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import PlayCard from "../../layout/playCard/PlayCard";
import Data from "./CardData";
import YouFollow from "../home/YouFollow";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Library = () => {
    return (
        <>
            <Grid sx={{ padding: "0rem 1rem" }} width={"92%"} mx={"auto"}>
                <Grid sx={12}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent={"space-between"}
                    >
                        <h3>Playlists</h3>
                        <Stack direction={"row"} columnGap={1} rowGap={1} height={"40px"} mt={2} flexWrap={"wrap"}>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", border: " 1px solid white" }}
                            >
                                Playlists
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", border: " 1px solid white" }}
                            >
                                Podcasts
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", border: " 1px solid white" }}
                            >
                                Artists
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{ color: "white", border: " 1px solid white" }}
                            >
                                Albums
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <h3 style={{marginTop:"50px"}}>Hip Hop</h3>
                <Grid container spacing={2} mt={2} border={"apx solid gray"}>
                    {Data.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PlayCard
                                    title={item.title}
                                    pic1={item.pic1}
                                    pic2={item.pic2}
                                    pic3={item.pic3}
                                    pic4={item.pic4}
                                    icon={<VisibilityOffIcon />}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <h3>Pop</h3>
                <Grid container spacing={2} border={"apx solid gray"}>
                    {Data.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PlayCard
                                    title={item.title}
                                    pic1={item.pic1}
                                    pic2={item.pic2}
                                    pic3={item.pic3}
                                    pic4={item.pic4}
                                    icon={<VisibilityOffIcon />}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <h3>Rock</h3>
                <Grid container spacing={2} border={"apx solid gray"}>
                    {Data.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <PlayCard
                                    title={item.title}
                                    pic1={item.pic1}
                                    pic2={item.pic2}
                                    pic3={item.pic3}
                                    pic4={item.pic4}
                                    icon={<VisibilityOffIcon />}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
            <YouFollow />
        </>
    );
};

export default Library;