import React from 'react'
import '../Styles/App.css'
import { Link } from "react-router-dom";

export default function Error404() {
    return (

        <>
            <h1 className='err-num'>404</h1>
            <h2 className='err-h2'>Oups! la page que vous demandez n'existe pas.</h2>
            <Link to='/' className='err-p'>Retourner sur la page d'accueil</Link>
        </>
    )
}