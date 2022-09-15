import React from 'react'
import Card from '../UI/card/Card'
import { EventContainer } from './StyledEvent'


const EventItem = ({ type, title, img, url, address, place, location, }) => {
    const typeParsed = type.replace(/_/g, ' ').split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ');

    const handleClick = () => {

    }

    return (
        <Card>
            <EventContainer onClick={handleClick}>
                <img src={img} alt="" />
                <div>
                    <h1>{title}</h1>
                    <h5>{typeParsed}</h5>

                </div>
            </EventContainer>
        </Card>
    )
}

export default EventItem