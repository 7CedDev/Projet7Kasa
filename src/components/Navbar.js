import React from 'react';
import { NavLink } from "react-router-dom";
import '../Styles/App.css'
import logo from '../images/LogoKasa.png'


function Navbar() {
    return (
        <nav className='Nav'>
            <NavLink to="/">
                <img src={logo} alt='LogoKasa' className='logo' />
            </NavLink>
            <div className='nav-txt'>
                <NavLink className={({ isActive }) => isActive ?
                    "nav-txt active" : "nav-txt"} to="/">Accueil</NavLink>
                <NavLink className={({ isActive }) => isActive ?
                    "nav-txt active" : "nav-txt"} to="/About">A propos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar