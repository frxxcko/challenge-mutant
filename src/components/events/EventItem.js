import React from 'react'
import Card from '../UI/card/Card'
import { EventContainer } from './StyledEvent'
import { useReadable } from '../../hooks/useReadable';

const EventItem = ({ type, title, img, lowestPrice, location, datetime, url }) => {
    const eventType = useReadable(type);
    return (
        <Card>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <EventContainer>
                    <img src={img} alt={`${title} ${type}`} aria-hidden='true' />
                    <div className='eventInfo'>
                        <div>
                            <h1>{title}</h1>
                            <h2>{new Date(datetime).toLocaleString('en-US', { day: '2-digit', month: 'short' })} · {location}</h2>
                        </div>
                        <div>
                            <span>{lowestPrice ? `From $${lowestPrice}` : 'Find tickets'}</span>
                            <p>{eventType}</p>
                        </div>
                    </div>
                </EventContainer>
            </a >
        </Card>
    )
}

export default EventItem