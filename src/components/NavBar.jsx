import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar-container'>
        <nav className=''>
            <ul className=' navBar-content text-li'>
            <Link className='navbar-text' to={"/"}><li>Inicio</li></Link>
            <Link className='navbar-text' to={"/productos"}><li>Productos</li></Link>
            <Link className='navbar-text' to={"/contacto"}><li>Contacto</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar