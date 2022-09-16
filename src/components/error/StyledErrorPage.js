import styled from "styled-components";
import { theme } from '../UI/Theme';

export const StyledErrorMsg = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    text-align: center;
    align-items: center;
    color: ${theme.primary};
    gap: 50px;
    button{
        border: none;
        border-radius: 5px;
        height: 60px;
        width: 250px;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: ${theme.primary};
        color: #fff;
        box-shadow: 0px 2px 5px 0px rgba( 0, 0, 0, 0.2);
        cursor: pointer;
        &:hover{
            background-color: #946aff;
            color: #fff;
        }
        &:active{
            background-color: #b699ff;
            color: #fff;
        }
    }

    @media screen and (min-width: 768px){
        flex-direction: column;
}
`