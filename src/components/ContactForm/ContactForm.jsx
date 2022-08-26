/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './ContactForm.scss'

export const  ContactForm= () => {

  // const infoUser = [{}]

  // const selectedRef = useRef()

  // const inputRef = useRef(null)

  // const handleSubmit = () => {
  //   const formData = new FormData(inputRef.current)
  //   const name = formData.get('name')
  //   const business = formData.get('business')
  //   const email = formData.get('email')
  //   infoUser.push({
  //     name: name,
  //     business: business,
  //     email:email,
  //     plan: selectedRef.current.value
  //   })
  //   console.info(infoUser)
  // }

  return (
    <div className='contactForm'>
        <div className='contactForm-content'>
            {/* <h1>
                Tu empresa necesita ser conocida por todos
            </h1>
            <form ref={inputRef}>
              <input
                type='text'
                name='name'
                placeholder='¿Cual es tu nombre?'></input>
              <input
                type='text'
                name='business'
                placeholder='¿Cual es el nombre de tu empresa?'></input>
              <input
                type='email'
                name='email'
                placeholder='Correo donde quieras recibir la información'></input>
            </form>
            <p>Plan de tu interés</p>
            <select ref={selectedRef}> 
              <option>Básico</option>
              <option>Premium</option>
              <option>Personalizado</option>
            </select>
            <button type='button' onClick={handleSubmit}>¡Enviamela!</button> */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-9ksWhj0GUya7zisVpH6UdUcL6OT90bEVgGoTZlPEsban2Q/viewform?embedded=true" width="640" height="975" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>
    </div>
  )
}
