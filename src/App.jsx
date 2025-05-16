import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import DetailProduct from './pages/DetailProduct'
import DefaultLayouts from './layouts/DefaultLayouts';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/products'>
              <Route index element={<Products />} />
              <Route path=':id' element={<DetailProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
