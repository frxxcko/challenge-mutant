import styled from "styled-components";
import { theme } from '../UI/Theme'

export const EventListContainer = styled.div`
    color: ${theme.primary};
    h1{
        margin: 20px;
    }
`
export const EventContainer = styled.div`
    display: flex;
    h1{
        margin: 10px;
        font-size: 1.3rem;
    }
    h5{
        margin: 0px 10px;
        color: ${theme.text_secondary};
    }
    `
