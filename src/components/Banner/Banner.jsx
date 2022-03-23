import React,{useEffect, useRef} from 'react'
import {useInView} from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import './Banner.scss'

export const Banner = () => {
    const [myRef,isIntersecting]=useInView({
        threshold:0.7
        
    })

    const myRefb=useRef()
    useEffect(()=>{ 
      const estado=(myRefb.current)
      window.addEventListener('scroll',function(){
        estado.classList.toggle('banner-dark',window.scrollY>1)
      })
  },
  [myRef])

  return (
    <div className='banner' ref={myRefb}>
        <div ref={myRef} className={isIntersecting?'banner-animation':'banner-info'}>
            <h1>La digitalización ya no es una opción</h1>
            <p>Confia el desarrollo digital de tu empresa a Techtrans </p>
            <Link to ='/servicios'><button type='button' className='banner-info__button'>Nuestros servicios</button></Link>
        </div>
    </div>
  )
}
