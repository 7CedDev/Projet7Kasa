import star from '../images/assets/star.svg'
import starGrey from '../images/assets/starGrey.png'

export default function Notation(props) {
    const { rating } = props
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img className='rate' src={star} alt='red stars' />)
        }
        else {
            stars.push(<img className='rate' src={starGrey} alt='grey stars' />)
        }
    }

    return (<section key={rating}>
        {stars}
    </section>)
}
