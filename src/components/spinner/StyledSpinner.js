import styled from "styled-components";
import { theme } from '../UI/Theme'

export const StyledSpinnerContainer = styled.div`
    position: absolute;
    top: 0px;
    z-index: 2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    background-color: #fff;
    span{
        margin-top: 20px;
        color: ${theme.primary};
    }
`