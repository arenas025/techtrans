import './Header.scss'
import React, { useEffect, useRef} from 'react'
import logo from '../../assets/logo4.png'
import { Link} from 'react-router-dom' 

export const Header = (services,info,contact) => {

  const myRef=useRef()

    useEffect(()=>{ 
      const estado=(myRef.current)
      window.addEventListener('scroll',function(){
        estado.classList.toggle('header-fixed',window.scrollY>0)
      })
  },
  [myRef])

  
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


