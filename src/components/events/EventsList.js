import React from 'react'
import EventItem from './EventItem'
import { EventListContainer } from './StyledEvent'

const EventsList = ({ events }) => {
    console.log(events);
    return (
        <EventListContainer>
            <h1>Events</h1>
            {events && events.map((event, i) => <EventItem key={`${event.title}_${i}`} type={event.type}
                title={event.short_title}
                img={event.performers[0].image}
                url={event.performers[0].url}
                address={event.venue.address}
                place={event.venue.name}
                location={event.venue.display_location} />)}
        </EventListContainer>
    )
}

export default EventsList