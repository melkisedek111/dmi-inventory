import styled, { keyframes } from "styled-components";

export const InventoryContainer = styled.div`
    padding: 30px;
    min-height: 100vh;
    width: 100%;
`;

export const InventorySearchContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 1px solid #DEDEDF;
    padding-bottom: 20px;
`;


export const InventoryButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 0;
`;

export const InventorySelectedItemContainer = styled.div`
    position: relative;
    max-width: 200px;
    padding: 10px 10px;
    border: 1px solid #DEDEDF;
    border-radius: 5px;
`;

export const InventorySelectedLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    color: #2178D0;
    svg {
        cursor: pointer;
    }
`;

export const InventorySelectedItemContent = styled.div`
    position: absolute;
    border: 1px solid #DEDEDF;
    width: 400px;
    height: 300px;
    left: -10px;
    border-radius: 5px;
    top: 40px;
`;


export const InventoryColumnHeader = styled.div`
    max-width: 200px;
    padding: 10px 10px;
    border: 1px solid #DEDEDF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    color: #2178D0;
    cursor: pointer;

    &:hover {
        background-color: rgba(33, 120, 208, 0.1);
    }
`;


export const InventoryTableContainer = styled.div`
`

export const InventoryTable = styled.table`
    border: 1px solid #DEDEDF;
    background-color: #fff;
    border-collapse: collapse;
    width: 100%;
    th {
        border-width: 1px;
        border-color: #DEDEDF;
        border-style: solid;
        font-weight: lighter;
        text-transform: uppercase;
        color: gray;
        &:nth-child(8) {
            width: 250px;
        }
    }

    td {
        text-align: center;
        padding: 5px;
        position: relative;
        font-weight: 200;

        &:nth-child(8) {
            text-align: justify;
        }

        &:nth-child(2) {
            & img {
                height: 150px;
                object-fit: contain;
            }
        }
    }

    & > tbody > tr {
        border-bottom: 1px solid #DEDEDF;
    }
`

const showFadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const ShowQuantityActionContainer = styled.div`
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in .5s ease forwards; /* Apply the animation */
    animation-name: ${showFadeInAnimation};
`