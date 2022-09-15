import React from 'react'
import ReactLoading from 'react-loading';
import { theme } from '../UI/Theme'
import { StyledSpinnerContainer } from './StyledSpinner';


const Spinner = ({ loadingMsg }) => {
    return (
        <StyledSpinnerContainer>
            <ReactLoading type='spinningBubbles' color={theme.primary} />
            <span>{loadingMsg}</span>
        </StyledSpinnerContainer>
    )
}

export default Spinner