import React from 'react'
import EventItem from './EventItem'
import { EventListContainer, StyledTitle } from './StyledEvent'

const EventsList = ({ events }) => {
    console.log(events);
    return (
        <>
            <StyledTitle>Events</StyledTitle>
            <EventListContainer>
                {events && events.map((event, i) => <EventItem key={`${event.title}_${i}`}
                    url={event.performers[0].url}
                    type={event.type}
                    title={event.short_title}
                    img={event.performers[0].image}
                    lowestPrice={event.stats.lowest_price}
                    datetime={event.datetime_local}
                    location={event.venue.display_location} />)}
            </EventListContainer>
        </>
    )
}

export default EventsList