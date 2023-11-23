import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='conteiner_nav'>
        <Link className='conteiner_nav_link' to={'/'}>INICIO</Link>
        <Link className='conteiner_nav_link' to={'/list'}>LISTA DE TAREAS</Link>
    </div>
  )
}

export default NavBar