import Logements from '../datas/annoncesLogements.json'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import '../Styles/App.css'

function Card() {
    // const path =`logements/${props.id}`
    // const id = props.id
    // const title = props.title
    // const cover = props.cover

    return (
        <>
        {Logements.map((item) => {
            const {cover,title, id } = item;
            return(
                 <div key={id} className='card'> 
                    <img className='img-cover' src={cover} alt={id} />
                    <Link to={'logements/' + id}  className='loc-card'>{title}</Link>
                </div> 
            )
        })}</>
    )
}

// Card.propsTypes = { 
//     id:PropTypes.string,
//     title:PropTypes.string,
//     cover:PropTypes.string,}

 
export default (Card)