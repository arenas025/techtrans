import React from 'react'
import { Header } from '../../components/Header/Header'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import './Contacto.scss'
import { Footer } from '../../components/Footer/Footer'

export const Contacto = () => {
  return (
    <div className='contacto'>
      <Header/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
