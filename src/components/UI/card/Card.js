import React from 'react'
import { StyledCard } from './StyledCard'

const Card = ({ children }) => {
    return (
        <StyledCard tabIndex={0} role='group'>{children}</StyledCard>
    )
}

export default Card