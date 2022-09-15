import React from 'react'
import Card from '../UI/card/Card'
import { EventContainer } from './StyledEvent'

const EventItem = ({ type, title, img, lowestPrice, location, datetime }) => {
    const typeParsed = type.replace(/_/g, ' ').split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');

    const handleClick = () => {

    }

    return (
        <Card>
            <EventContainer onClick={handleClick}>
                <img src={img} alt={`${title} ${type}`} aria-hidden='true' />
                <div className='eventInfo'>
                    <div>
                        <h1>{title}</h1>
                        <h2>{new Date(datetime).toLocaleString('en-US', { day: '2-digit', month: 'short' })} · {location}</h2>
                    </div>
                    <div>
                        <span>{lowestPrice ? `From $${lowestPrice}` : 'Find tickets'}</span>
                        <p>{typeParsed}</p>
                    </div>
                </div>
            </EventContainer>
        </Card>
    )
}

export default EventItem