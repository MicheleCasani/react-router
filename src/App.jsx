import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/products'>
            <Route index element={<Products />} />
            <Route path=':id' element={<DetailProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
