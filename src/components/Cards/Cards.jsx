import { Link } from 'react-router-dom'
import './Cards.scss'

import React from 'react'

export const Cards = () => {
  return (
    <div className='servicios-cards'>
      <div className='servicios-cards_basic'>
        <h1>
          BASIC
        </h1>
        <ul>
          <li>Registro de Dominio (1 año)</li>
          <li>Hospedaje (1 año) incluido</li>
          <li>Diseño web responsivo</li>
          <li>1 cuenta de correo</li>
          <li>Formulario de contacto</li>
          <li>Optimización web SEO</li>
          <li>Certificado SSL</li>
        </ul>
        <Link to='/contacto'><button>¡Estoy interesado!</button></Link>
      </div>
      <div className='servicios-cards_premium'>
      <h1>
          PREMIUM
        </h1>
        <ul>
          <li>Registro de Dominio (1 año)</li>
          <li>Hospedaje (1 año) incluido</li>
          <li>Diseño web responsivo</li>
          <li>3 cuentas de correo </li>
          <li>Formulario de contacto</li>
          <li>Optimización web SEO</li>
          <li>Certificado SSL</li>
          <li>Botón de WhatsApp</li>
          <li> Imágenes profesionales </li>
        </ul>
        <Link to='/contacto'><button>¡Estoy interesado!</button></Link>
      </div>
      <div className='servicios-cards_customized'>
      <h1>
          PERSONALIZADO
        </h1>
        <ul>
          <li>Registro de Dominio (1 año)</li>
          <li>Hospedaje (1 año) incluido</li>
          <li>Diseño web responsivo</li>
          <li>3 cuentas de correo </li>
          <li>Formulario de contacto</li>
          <li>Certificado SSL</li>
          <li>Y muchas más funcionalidades adecuadas para tu negocio...</li>
        </ul>
        <Link to='/contacto'><button>¡Estoy interesado!</button></Link>
      </div>
    </div>
  )
}

