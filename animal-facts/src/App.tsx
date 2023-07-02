import { Route, Routes } from "react-router-dom"
import React from 'react';
import Navbar from './Navbar';
import Home from './pages/home';
import CatFact from './pages/CatFact';
import DogFact from "./pages/DogFact";
import CatPicture from "./pages/CatPicture";
import DogPicture from "./pages/DogPicture";
import FaceName from "./pages/FaceName";
import { Button, ButtonBase, ButtonGroup, IconButton, ListItemButton } from "@mui/material"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CatFact" element={<CatFact />} />
          <Route path="/DogFact" element={<DogFact />} />
          <Route path="/CatPicture" element={<CatPicture />} />
          <Route path="/DogPicture" element={<DogPicture />} />
          <Route path="/FaceName" element={<FaceName />} />
        </Routes>
        </div>
    </>
  )
  
}

export default App
