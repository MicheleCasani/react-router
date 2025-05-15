import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/aboutus' Component={AboutUs}></Route>
          <Route path='/products' Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
