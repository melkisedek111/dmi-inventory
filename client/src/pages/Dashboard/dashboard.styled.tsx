import styled from "styled-components";

export const DashboardContainer = styled.div`
    min-height: 100vh;
    min-width: 100vh;
    padding: 10px 130px;
    
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const CustomCardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center; 
   gap: 40px;
   flex-wrap: wrap;
`; 


export const TransactionTableContainer = styled.div`
    background-color: #fff;
    width: 100%;
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    
`