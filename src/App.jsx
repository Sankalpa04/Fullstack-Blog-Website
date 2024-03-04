import React from 'react'
import Landingpage from './pages/Landingpage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import LatestPage from './pages/LatestPage'
import UpcomingPage from './pages/UpcomingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import {  BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>  
          <Route path='/about' element={<AboutPage/>}/>  
          <Route path='/gallery' element={<GalleryPage/>}/>  
          <Route path='/latest' element={<LatestPage/>}/>  
          <Route path='/upcoming' element={<UpcomingPage/>}/>  
          <Route path='/login' element={<LoginPage/>}/>  
          <Route path='/signup' element={<SignUpPage/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App