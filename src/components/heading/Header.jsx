import React from 'react';
import Head from '../Head';
import '../header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [click,setClick]= useState(false)
  return (
    <div>
     <Head/>
     <header>
      <nav className='flexSB'>
        <ul className={click ? "mobile-nav" :"flexSB"} onClick={()=>setClick(false)}>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li><Link to="/course">Tous les cours</Link></li>
          <li><Link to="/about">Formation</Link></li>
          <li><Link to="/formation">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      <div className="start">
        <div className="button">SSCF-CERTIFICAT</div>
      </div>
      <button className='toggle' onClick={() => setClick(!click)}>
        {click ? <i class="fa-regular fa-circle-xmark"></i> : <i class="fa-solid fa-bars"></i>}
      </button>
      </nav>
     </header>

    </div>
  )
}

export default Header