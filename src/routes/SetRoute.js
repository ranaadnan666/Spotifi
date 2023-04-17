import React from 'react'
import { Route, Routes } from "react-router-dom";
import Sidebar from '../pages/sidebar/Sidebar';
import MainHome from '../pages/home/Home';
import MainLibrary from '../pages/library/MainLibrary';
import Artist from '../components/artist/Artist';
import MainSearch from '../pages/search/MainSearch';
import PlayList from '../components/playlist/PlayList';
import LikeSong from '../pages/likesong/LikeSong';
const SetRoute = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<MainHome />} />
          <Route path="search" element={<MainSearch />} />
          <Route path="library" element={<MainLibrary />} />
          <Route path="artist" element={<Artist />} />
          <Route path="playlist" element={<PlayList/>} />
          <Route path="likesong" element={<LikeSong />} />
        </Route>
        </Routes>
    </div>
  )
}

export default SetRoute