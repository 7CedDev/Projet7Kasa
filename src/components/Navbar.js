import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/App.css'
import logo from '../images/LogoKasa.png'


function Navbar() {
    return (
        <nav className='Nav'>
            <img src={logo} alt='LogoKasa' className='logo' />
            <div className='nav-txt'>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </div>
        </nav>
    )
}

export default Navbar