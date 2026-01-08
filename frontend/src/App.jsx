import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BreedAnalytics from '../pages/BreedAnalytics'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import "./i18n"; 
const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<BreedAnalytics />} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
