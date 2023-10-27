import styled from "styled-components";

export const CustomCardBox = styled.div`
    border: 1px solid lightgray;
    background-color: #fff;
    width: 370px;
    border-radius: 10px;
    overflow: hidden;
`;

export const CustomCardHeader = styled.div`
    background-color: rgba(1, 247, 254, 0.5);
    padding: 5px 10px;
    border-bottom: 1px solid lightgray;
    text-transform: uppercase;
`

export const CustomCardIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px 20px;
    img {
        max-height: 75px;
        object-fit: contain;
    }

    h1 {
        font-weight: bold;
        font-size: 50px;
    }
`;

export const ValueContainer = styled.div`
    
    display: flex;
    align-items: baseline;
    gap: 5px;

    p {
        font-size: 22px;
    }
`;