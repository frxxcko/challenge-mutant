import React from 'react'
import { Link } from 'react-router-dom'
import { StyledErrorMsg } from './StyledErrorPage'


const ErrorPage = () => {
    return (
        <StyledErrorMsg>
            <h1>Error 404</h1>
            <h2>
                Sorry the path you're trying to reach doesn't exist yet..
            </h2>
            <Link to="/">
                <button type='button'>Take me back</button>
            </Link>
        </StyledErrorMsg>
    )
}

export default ErrorPage