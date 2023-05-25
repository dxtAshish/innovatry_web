import React from 'react'

import Footer from '../component/Footer'

import NavBar from '../component/NavBar'
import Carousal from '../component/Carousal'
import Body from '../component/Body'
import Cards from '../component/Cards'
import { useParams } from 'react-router-dom'
import Category from '../component/Category'


export default function Home() {

  const {
    category,tag
  }=useParams()
  return (
    
    <div>

       
        <div><NavBar/></div>
        <div className='mt-2'><Carousal/></div>
        <div><Body/></div>
        {!category?
        <div className='m-3'><Cards tag={tag}/></div>
        :<Category/>}
        
        <div><Footer/></div>
    </div>
  )
}
