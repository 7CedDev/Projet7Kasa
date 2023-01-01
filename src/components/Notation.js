import star from '../images/assets/star.svg'
import starGrey from '../images/assets/starGrey.png'

export default function Notation({ rating }) {
    // const { rating } = props
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img className='rate' src={star} alt='' />)
        }
        else {
            stars.push(<img className='rate' src={starGrey} alt='' />)
        }
    }

    return (<section>
        {stars}
    </section>)
}
