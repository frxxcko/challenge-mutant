import React from 'react'
import { StyledCard } from './StyledCard'

const Card = ({ children, onClick }) => {
    return (
        <StyledCard onClick={onClick} tabIndex={0} role='group'>{children}</StyledCard>
    )
}

export default Card