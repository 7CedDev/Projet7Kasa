import React, { useEffect, useState } from 'react'
import '../Styles/App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logementlocation from '../datas/location'
import Notation from '../components/Notation'
import Tag from '../components/Tag'
import Slider from '../components/Slider';
import Dropdown from '../components/Dropdown'

export default function FicheLogements() {
    const navigate = useNavigate()
    let { id } = useParams();
    const [item, setItem] = useState()
    const [tags, setTags] = useState()

    // const item = logementlocation.find(item => item.id === id);
    useEffect(async () => {
        const newItem = await logementlocation.find(item => item.id === id);
        console.log('newItem', newItem)
        setItem(newItem)
    }, [])
    useEffect(() => {
        if (item == null) {
            navigate("/error");
        } else {
            const newTags = item.tags.map(tag => {
                return <Tag text={tag} />
            })
            setTags(newTags)
        }
    }, [item])


    const Equipments = () => {
        console.log(logementlocation)
        const equipments = logementlocation.map((equipments) => (
            < Dropdown title={equipments.title} description={item.equipments} />
        ))

    }


    return (
        <div>
            <div className='caroussel'>
                <Slider pictures={item.pictures} />
            </div>

            <div className='card'>
                <div className='card-top'>
                    <div className='location-text'>
                        <h2 className='item-title'>{item.title}</h2>
                        <h3 className='location'>{item.location}</h3>
                        <div>
                            <h4 className='tags'>{tags}</h4>
                        </div>
                    </div>

                    <div className='host'>
                        <div className='stars'>{item.stars}
                            <Notation rating={item.rating} />
                        </div>
                        <div className='host-info'>
                            <p className='name-txt'>{item.host.name}</p>
                            <img className='img-host' src={item.host.picture} alt={item.id} />
                        </div>
                    </div>
                </div>
                <div className='cards-down'>
                    <Dropdown title='Description' description={item.description} />
                    <Dropdown title='Equipments' description={item.equipments} />
                </div>
            </div>
        </div>


    )
}