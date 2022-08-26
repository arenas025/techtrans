import React,{useEffect, useRef, useState} from 'react'
// import {useInView} from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import './Banner.scss'

export const Banner = () => {


    const [isIntersecting, setIsIntersecting] = useState(false)
    
    const myRefb=useRef()
    useEffect(()=>{ 
      const estado=(myRefb.current)
      setIsIntersecting(true)
      setTimeout(()=> {
        estado.classList.add('banner-dark')
      },0.1)
  },
  [])

  return (
    <div className='banner' ref={myRefb}>
        <div className={isIntersecting?'banner-animation':'banner-info'}>
            <h1>La digitalización ya no es una opción</h1>
            <p>Confia el desarrollo digital de tu empresa a Techtrans </p>
            <Link to ='/servicios'><button type='button' className='banner-info__button'>Nuestros servicios</button></Link>
        </div>
    </div>
  )
}
