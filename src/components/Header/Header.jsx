/* eslint-disable jsx-a11y/iframe-has-title */
import './Header.scss'
import React, { useRef} from 'react'
import logo from '../../assets/logo4.png'
import { Link} from 'react-router-dom' 

export const Header = (services,info,contact) => {


'https://forms.gle/ukBM7h6E4JFNGaLk7'
  const myRef=useRef()
  
  return (
    <div ref={myRef} className='header' >
      <Link to='/'><img className='header-img' src={logo} alt='logo'/></Link>
      <ul className='header-info'>
      <Link to='/servicios'><li>Nuestros servicios</li></Link>
      <Link to='/info'><li>Quienes somos</li></Link>
      <Link to='/contacto'  id='contacto'><li>Contactanos</li></Link>
      </ul>
    </div>
  )
}
