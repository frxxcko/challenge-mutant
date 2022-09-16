import styled from "styled-components";

export const StyledTemplateResponsive = styled.div`
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 414px){
        display: flex;
        justify-content: center;
        margin-top: 100px;
        div{
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            width: 95%;
            img{
                width: 100vw;
            }
        }
        h1{
            font-size: 2rem;
        }
}
` 