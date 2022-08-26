import React from 'react'
import { useEffect,useRef } from 'react'
import './Footer.scss'

export const Footer = () => {
  const myRef = useRef()
  useEffect(()=>{ 
    const estado=(myRef.current)
    estado.classList.add('footer-fixed')
    // window.addEventListener('scroll',function(){
    //   estado.classList.toggle('footer-fixed',window.scrollY>0)
    // })
},
[])
  return (
    <div ref={myRef} className='footer'>
        <p>Todos los derechos reservados © 2022 Techtrans</p>
    </div>
  )
}
