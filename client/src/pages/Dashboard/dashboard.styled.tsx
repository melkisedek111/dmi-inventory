import styled from "styled-components";

export const DashboardContainer = styled.div`
   padding: 30px;
   min-height: 100vh;
`;


export const PageTitleHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 3rem;

    h3 {
        font-weight: bold;
        font-size: 25px;
    }

    svg {
        color: #2178D0;
    }
`





export const TransactionTableContainer = styled.div`
    background-color: #fff;
    width: 100%;
    border: 1px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    
`

export const ReportContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const MainDashboardContainer = styled.div`
    display: flex;
    gap: 20px;
`