import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    {/* <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Services />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </Router> */}
    <Navbar />
    <Home/>
    <Footer/>
    </>
  )
}

export default App
