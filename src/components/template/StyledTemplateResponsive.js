import styled from "styled-components";

export const StyledTemplateResponsive = styled.div`
    @media screen and (max-width: 468px){
        display: flex;
        justify-content: center;
        div{
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            width: 95%;
            img{
                width: 100vw;
            }
        }
    }
` 