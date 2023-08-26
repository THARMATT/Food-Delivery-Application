import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Carousel from '../Components/Carousel'
import Card from '../Components/Card'
const Home = () => {
  return (
    <div>
     <Navbar/>
     <Carousel/>
 <div className="d-flex  justify-content-center">  <Card/>
   <Card/>
   <Card/>
   <Card/></div>
     <Footer/>
    </div>
  )
}

export default Home
