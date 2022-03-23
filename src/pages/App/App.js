import {Contacto} from '../Contacto/Contacto.jsx'
import {Info} from '../Info/Info.jsx'
import {Servicios} from '../Servicios/Servicios.jsx'
import { Home } from '../Home/Home.jsx'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React from 'react'
import './App.scss'




export const App = () => {
  return ( 
    <Router>
          <Routes>
            <Route path= "/" element= {<Home/>}>
            </Route>
            <Route path='/servicios' element={<Servicios/>}>
            </Route>
            <Route path='/contacto' element={<Contacto/>}>
            </Route>
            <Route path='/info' element={<Info/>}>
            </Route>
          </Routes> 
      </Router>

  )
}