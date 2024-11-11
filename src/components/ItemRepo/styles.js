import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    button {
        border: 0;
        text-decoration: underline;
        background: transparent;
        color: #FF0000;
        margin-top: 20px;
        &: hover{
            cursor: pointer;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`