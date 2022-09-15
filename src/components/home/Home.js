import React from 'react'
import EventsList from '../events/EventsList'


const Home = ({ events }) => {
    return (
        <>
            <EventsList events={events} />
        </>
    )
}

export default Home