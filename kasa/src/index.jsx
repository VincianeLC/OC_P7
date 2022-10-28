import * as React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Banner from './components/Banner'
import About from './pages/About'
import Logement from './pages/Logement'
import Error from './components/Error'
import Footer from './components/Footer'
import './utils/style/index.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render
(
     
    <React.StrictMode>
     <BrowserRouter>
       
       
     <Banner/>
            <Routes>
            
            <Route path="/" element ={<Home />}/>
            <Route path="/logement" element ={<Logement />}/>
            <Route path="/logement/:id" element ={<Logement />}/>
            <Route path="/about" element ={<About />}/>
            <Route path="*" element={<Error />}/>
         
            </Routes>
       
            <Footer />
        
      </BrowserRouter> 
        </React.StrictMode>
  )

  
    
