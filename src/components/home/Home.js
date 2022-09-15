import React from 'react'
import EventsList from '../events/EventsList'
import Spinner from '../spinner/Spinner'
import { StyledHome } from './StyledHome'

const Home = ({ loaded, events }) => {
    return (
        <StyledHome>
            {!loaded ? <Spinner loadingMsg='Loading events...' /> : <EventsList events={events} />}
        </StyledHome>
    )
}

export default Home