import React from 'react'
import banner from '../images/aboutBanner.png'
import { AboutDatas } from "../datas/AboutDatas"
import Dropdown from '../components/Dropdown'
import Banner from '../components/Banner'


const About = () => {
    const dropdowns = AboutDatas.map((item) => (
        <Dropdown title={item.title} description={item.text} />
    ))

    return (
        <div className='about-container'>
            <Banner image={banner} alt='AboutBanner' className='about-img-banner' />

            <div className='about-menu'>
                <div className='card-down-about'>{dropdowns}</div>
            </div>
        </div>
    )
}

export default About