import React, { useState, useEffect } from 'react'
import previous from '../images/assets/previous.svg'
import next from '../images/assets/next.svg'


export default function Slider(props) {
    const { pictures } = props
    const length = pictures.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    let [currentImage, setCurrentImage] = useState();
    useEffect(() => {
        setCurrentImage(pictures[currentIndex]);
    }, [currentIndex])

    function handlePreviousImg() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) { newIndex = pictures.length - 1 };
        setCurrentIndex(newIndex)
    }

    function handleNextImg() {
        let newIndex = currentIndex + 1;
        if (newIndex >= pictures.length) { newIndex = 0 }
        setCurrentIndex(newIndex)
    }


    return (<div key={pictures}>
        <div className='slider-container'>
            <img className='pictures' src={currentImage} alt='lodgings-pictures'></img>
            <p className='pictures-count'>{currentIndex + 1}/{pictures.length}</p>
            {length > 1 ? (
                <>
                    <img className='pre-btn' src={previous} onClick={handlePreviousImg} alt='previous button' />
                    <img className='nxt-btn' src={next} onClick={handleNextImg} alt='next button' />
                </>
            ) : null
            }
        </div>
    </div>)


}