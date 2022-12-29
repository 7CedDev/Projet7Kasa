import { useState } from 'react'
import arrow from '../images/assets/ArrowDown.svg'
import arrowUp from '../images/assets/ArrowUp.svg'


function Dropdown(props) {
    const title = props.title
    const description = props.description
    const [image, setImage] = useState(arrow)
    const [textClass, setTextClass] = useState('text')


    function handleButton() {
        console.log('handleButton');
        let newImage;
        let newText;
        if (image == arrow) { newImage = arrowUp }
        else { newImage = arrow }
        setImage(newImage)
        if (textClass == 'text') { newText = 'text-none' }
        else { newText = 'text' }
        setTextClass(newText)
    }


    return (

        <div className='card-down'>
            <h4 onClick={handleButton} className='title-h4'>{title}
                <img className='dropdown-btn' src={image} alt='dropdown-arrow' /></h4>
            <div className='text-container'><p className={textClass}>{description}</p></div>
        </div>
    )
}

export default Dropdown