import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Introduction from './Components/Introduction/Introduction'
import Background from './Components/Background/Background'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
    <Router> 

      <Navbar/>

      <Background />
      <Introduction />
      <About/>
      <Portfolio />
      <Contact />
    </Router> 
    </>
  )
}

export default App
