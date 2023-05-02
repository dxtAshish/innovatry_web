import React from 'react'
import Card from '../component/Card'
import Footer from '../component/Footer'

import NavBar from '../component/NavBar'
//import Carousal from '../component/Carousal'
import Body from '../component/Body'
import Cards from '../component/Cards'


export default function Home() {
  return (
    
    <div>

       
        <div><NavBar/></div>
        {/*<div><Carousal/></div>*/}
        <div><Body/></div>
        <div className='m-3'><Cards/></div>
        
        <div><Footer/></div>
    </div>
  )
}
