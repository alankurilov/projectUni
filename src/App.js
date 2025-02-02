import img from './image_2022-06-27_17-28-47.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { useState } from "react";
import Header from './Pages/Header/Header';
import Universities from './Pages/Universities/Universities';
import University from './Pages/University/University';
import Form from './Pages/Form/Form';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import data from './data.js'
function App() {
  return (
     <BrowserRouter>
                  <div class="sidebar">
                	<ul>
		                <li><a className="btn btn-primary w-100 link " href="/universities">
                            Топ универов
                        </a></li>
		                <li><a className="btn btn-primary w-100 link " href="/form">
                            Подбор для вас
                        </a></li>
	                </ul>
                </div>
     <div className='middleSection'>
      
       <Routes>
         <Route path='/landingpage' element={<LandingPage />}></Route>
         <Route path='/university/:name' element={<University />}></Route>
         <Route path='/universities' element={<Universities/>}></Route>
         <Route path='/form' element={<Form />}></Route>
       </Routes>

       </div>
      
       </BrowserRouter>
  )
}

export default App;
