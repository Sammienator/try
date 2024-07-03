import React from 'react'


import './App.css'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import NewestDeals from './components/NewestDeals'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'

function App() {
 

  return (
  
      <div className="app w-11/12  m-auto">
       
        <Hero/>
        <NewestDeals/>
        <AboutUs/>
        <BestDeals/>
        <Footer/>



      </div>
        
  
  )
}

export default App
