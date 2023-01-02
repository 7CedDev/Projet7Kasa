import Logements from '../datas/annoncesLogements.json'
import { Link } from "react-router-dom";
import '../Styles/App.css'

function Card() {

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
 
export default (Card)