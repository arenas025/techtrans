import { Header } from '../../components/Header/Header'
import { Banner } from '../../components/Banner/Banner'
import { Footer } from '../../components/Footer/Footer'
import React from 'react'
import './Home.scss'

export const Home = () => {
  return (
    <div className='body'>
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}
