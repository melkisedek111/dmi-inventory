import styled from "styled-components";

interface CustomCardContainerProps {
    fontColor?: string;
}

export const CustomCardsContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: space-between;
    flex-wrap: wrap;
    /* flex: 0.9; */
`;

export const CustomCardContainer = styled.div<CustomCardContainerProps>`
    padding: 1.5rem; 
    background-color: rgb(255 255 255 / 1);
    display: flex;
    align-items: center;
    gap: 5px;
    max-height: 120px;
    border-radius: 10px;
    h5 {
        font-size: 15px;
        font-weight: 600;
        color: rgb(97 97 97);
    }

    h4 {
        font-size: 22px;
        font-weight: 700;
    }

    span {
        margin-top: 30px;
        font-size: 9px;
        color: red;
    }

    svg {
        background-color: rgb(${props => props.fontColor} / .5);
        border-radius: 50%;
        padding: 7px;
        height: 65px;
        width: 65px;
        color: rgb(${props => props.fontColor});
        /* font-size: 45px; */
    }
`; 

