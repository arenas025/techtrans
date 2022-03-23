import React from 'react'
import { Header } from '../../components/Header/Header'
import { FooterFixed } from '../../components/FooterFixed/FooterFixed'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import './Contacto.scss'

export const Contacto = () => {
  return (
    <div className='contacto'>
      <Header/>
      <ContactForm/>
      <FooterFixed/>
    </div>
  )
}
