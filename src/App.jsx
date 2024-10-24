// import { useState } from 'react'
import hero from './hero.png'
import data from './data'
import React, { useState } from 'react';
import './index.css';

import { createBrowserRouter,Route,RouterProvider,createRoutesFromElements } from 'react-router-dom';
import New from './New'
import BannerHome from './components/Banner';
import Navbar from './components/Navbar';
import History from './components/History';
import Donations from './components/Donations';
import Selections from './components/Selections';
import ExamResult from './components/ExamResult';
import CarouselBasicExample from './components/Test';
import Gallery from './components/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Upload from './pages/Upload';
import Inputs from './pages/Inputs';




const router=createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Navbar/>}>

  <Route path='/' index element={<BannerHome/>}/>
  <Route path='/banner' element={<BannerHome/>}/>
  <Route path='/history' element={<History/>}/>
  <Route path='/donations' element={<Donations/>}/>
  <Route path='/selections' element={<Selections/>}/>
  <Route path='/result' element={<ExamResult/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/upload' element={<Upload/>}/>
  <Route path='/admin' element={<Inputs/>}/>
</Route>))




function App() {
 return(<RouterProvider router={router}/>

 )
}

export default App;



//     <>
//     {/*Nav*/}
