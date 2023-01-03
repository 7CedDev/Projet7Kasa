import React from 'react'
import '../Styles/App.css'
import { useParams } from 'react-router-dom'
import logementlocation from '../datas/location'
import Notation from '../components/Notation'
import Tag from '../components/Tag'
import Gallery from '../components/Gallery';
import Dropdown from '../components/Dropdown'

export default function FicheLogements() {
    let { id } = useParams();

    const item = logementlocation.find(item => item.id === id);
    if (!item) { window.location.replace('/error') }


    const tags = item.tags.map(tag => {
        return <Tag text={tag} key={tag} />
    })

    const equipments = item.equipments;
    const equipmentsList = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })
    return (
        <>
            <div className='caroussel'>
                <Gallery pictures={item.pictures} />
            </div>

            <div key={id} className='card'>
                <div className='card-top'>
                    <div className='location-text'>
                        <h2 className='item-title'>{item.title}</h2>
                        <h3 className='location'>{item.location}</h3>
                        <div>
                            <h4 className='tags'>{tags}</h4>
                        </div>
                    </div>

                    <div className='host'>

                        <Notation key={item.stars} rating={item.rating} className='stars'>{item.stars}</Notation>


                        <div className='host-info'>
                            <p className='name-txt'>{item.host.name}</p>
                            <img className='img-host' src={item.host.picture} alt={item.id} />
                        </div>
                    </div>
                </div>
                <div className='cards-down'>
                    <div className='card-down-lodging'>
                        <Dropdown title='Description' description={item.description} />
                        <Dropdown title='Equipements' description={equipmentsList} />
                    </div>
                </div>
            </div>
        </>


    )
}