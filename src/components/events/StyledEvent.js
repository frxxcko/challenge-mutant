import styled from "styled-components";
import { theme } from '../UI/Theme'

export const StyledTitle = styled.h1`
    color: ${theme.primary};
    margin: 20px;
    cursor: default;
    width: 69%;
`

export const EventListContainer = styled.div`
    color: ${theme.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const EventContainer = styled.div`
    display: flex;
    h1{
        margin: 10px;
        font-size: 1.4rem;
    }
    h2{
        font-size: 1rem;
        margin: 10px;
        color: ${theme.secondary}
    }
    p{
        margin: 10px;
        color: ${theme.text_secondary};
    }
    span{
        margin: 10px;
        color: ${theme.primary}
    }
    .eventInfo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
