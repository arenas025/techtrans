import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Cards } from '../../components/Cards/Cards'
import './Servicios.scss'

export const Servicios = () => {
  return (
    <div className='servicios'>
    <Header/>
    <Cards/>
    <Footer/>
    </div>
  )
}
