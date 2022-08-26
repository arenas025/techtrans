import React from 'react'
import { Header } from '../../components/Header/Header'
import './Info.scss';
import logo from '../../assets/logo4.png'
import { Footer } from '../../components/Footer/Footer';


export const Info = () => {
  return (
    <div className='info'>
    <Header/>
    <main className='info--main'>
      <div className='info--main__left'>
        <div className='info--main__left__content'>
          <h1 className='info--main__left__content__title'>
            Techtrans
          </h1>
          <div className='info--main__left__content__bar'/>
          <p className='info--main__left__content__text'>
          En Techtrans ayudamos a las pequeñas empresas y microempresas a digitalizarse, esto debido a las amplias ventajas que se encuentran en el entorno digital; ventajas tales como la ampliación del alcance de mercado, optimización del servicio, reducción de costos, entre otros; además, con un costo del servicio a un nivel asequible para empresas de estos tamaños.
          </p>
        </div>
      </div>
      <div className='info--main__right'>
        <img src={logo} alt='logo' className='info--main__right__img'/>
      </div>
    </main>
    <Footer/>
    </div>
  )
}
