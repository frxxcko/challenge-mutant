import React from 'react'
import { StyledCard } from './StyledCard'

const Card = ({ children }) => {
    return (
        <StyledCard>{children}</StyledCard>
    )
}

export default Card