import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Introduction from './Components/Introduction/Introduction'
import Background from './Components/Background/Background'
import About from './Components/About/About'
const Portfolio = lazy(() => import('./Components/Portfolio/Portfolio'));
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
    <Router> 
      <Navbar/>
      <Background />
      <Introduction />
      <About/>
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio />
      </Suspense>
      <Contact />
    </Router> 
    </>
  )
}

export default App
