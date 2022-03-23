import React from 'react'
import { Header } from '../../components/Header/Header'
import { FooterFixed } from '../../components/FooterFixed/FooterFixed'
import './Info.scss';
import logo from '../../assets/logo4.png'


export const Info = () => {
  return (
    <div className='info'>
    <Header/>
    <div className='info-content'>
      <h1>
        Techtrans
      </h1>
      <p>
      TECHTRANS S.A.S Fue fundada en el año 2022 en aras de ayudar a las microempresas y pequeñas empresas a digitalizarse, esto debido a las amplias ventajas que se encuentran en el entorno digital; ventajas tales como la ampliación del alcance de mercado, optimización del servicio, reducción de costos, entre otros; además, con un costo del servicio a un nivel asequible para empresas de estos tamaños.
      </p>
      <img src={logo} alt='logo'/>
    </div>
    <FooterFixed/>
    </div>
  )
}
