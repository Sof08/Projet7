
import React from 'react';
import logements from '../annonces.json'
import Card from './card'

const list_card = () => {
    return(
        <section className='section_logement'>
            <ul className='list_logement'>
                {logements.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default list_card;