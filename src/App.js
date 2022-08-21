import React from 'react'
import "./app.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import Allinone from './components/Allinone';
import Pricing from './components/Pricing';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>

    <Routes>
      <Route exact path="/" element={<Hero/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/support" element={<Support/>}/>
      <Route exact path="/all" element={<Allinone/>}/>
      <Route exact path="/price" element={<Pricing/>}/>




    </Routes>
    </BrowserRouter>
   {/* <Hero/>
   <About/>
   <Support/>
   <Allinone/>
   <Pricing/>
   <Footer/> */}
  </>
  )
}

export default App
