import star from '../images/assets/star.svg'
import starGrey from '../images/assets/starGrey.png'

export default function Notation(props) {
    const { rating } = props
    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img className='rate' src={star} alt='red stars' key={i} />)
        }
        else {
            stars.push(<img className='rate' src={starGrey} alt='grey stars' key={i} />)
        }
    }

    return (<section>{stars}</section>)
}
