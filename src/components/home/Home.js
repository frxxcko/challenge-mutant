import React from 'react'
import EventsList from '../events/EventsList'
import { StyledHome } from './StyledHome'
import Spinner from '../spinner/Spinner'

const Home = ({ loaded, events }) => {
    return (
        <StyledHome>
            {!loaded ? <Spinner loadingMsg='Loading events...' /> : <EventsList events={events} />}
        </StyledHome>
    )
}

export default Home