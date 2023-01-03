import Logements from '../datas/annoncesLogements.json'
import { NavLink } from "react-router-dom";
import '../Styles/App.css'

function Card() {

    return (
        <>
        {Logements.map((item) => {
            const {cover,title, id } = item;
            return(
                 <div key={id} className='card'> 
                    <NavLink to={'logements/' + id} className='img-link'>
                    <img className='img-cover' src={cover} alt={id}/>
                        <p className='loc-card'>{title}</p>
                        
                    </NavLink>    
                </div> 
            )
        })}</>
    )
}
 
export default (Card)