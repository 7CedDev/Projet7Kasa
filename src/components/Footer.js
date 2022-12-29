import React from 'react'
import logo from '../images/assets/.LOGO-2.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='Foo-content'>
                <img src={logo} alt='LogoKasa' className='logoFoo' />
                <p className='foo-txt'>© 2022 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}