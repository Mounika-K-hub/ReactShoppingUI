import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents, Ladies} from '../data'
import Womens from '../components/Womens'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion]=useState(Gents)
  const [ladiesFashion, setladiesFashion]=useState(Ladies)
  
  // console.log(Gents)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion}/>
      <Womens ladiesFashion={ladiesFashion}/>

      <Footer />
    </div>
  )
}

export default Mainpage