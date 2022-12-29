import React from 'react'
import Card from '../components/Card'
import logementlocation from '../datas/location'
import Banner from '../components/Banner'
import banner from '../images/homeBanner.png'


export default function Home() {
    const locationCards = logementlocation.map((logement) => {

        return (<Card
            id={logement.id}
            title={logement.title}
            cover={logement.cover} />)
    })

    return (
        <main className='main'>
            <div>
                <Banner image={banner} className='home-banner' />
            </div>
            <section>
                <wrapper className='wrapper'>
                    {locationCards}
                </wrapper>
            </section>
        </main>
    )
}
