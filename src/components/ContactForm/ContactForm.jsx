import React from 'react'
import './ContactForm.scss'

export const  ContactForm= () => {
  return (
    <div className='contactForm'>
        <div className='contactForm-content'>
            <h1>
                Tu empresa necesita ser conocida por todos
            </h1>
            <input type='text' placeholder='¿Cual es tu nombre?'></input>
            <input type='text' placeholder='¿Cual es el nombre de tu empresa?'></input>
            <input type='email' placeholder='Correo donde quieras recibir la información'></input>
            <p>Plan de tu interés</p>
            <select> 
              <option>Básico</option>
              <option>Premium</option>
              <option>Personalizado</option>
            </select>
            <button type='button' onClick={()=>{
              alert('Tu respuesta se ha registrado satisfactoriamente')
            }}>¡Enviamela!</button>
        </div>
    </div>
  )
}
