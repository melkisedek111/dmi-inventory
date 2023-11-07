import styled from "styled-components";


export const ReleaseHistoryContainer = styled.div`
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;


    h5 {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

export const ReleaseTypeHeaderContainer = styled.div`
    border-bottom: 1px solid #DEDEDF;
    display: flex;
    margin-bottom: 20px;

    .selectedReleaseType {
        border-bottom: 2px solid #2178d0;
        color: #2178d0;
    }

    > div {
       
        cursor: pointer;

        > p {
            padding: 20px;
            font-weight: 600;
        }

        :hover {
            background-color: rgba(33, 120, 208, 0.1);
            color: #2178d0;
        }
    }

`;

export const ReleaseTypeTableContainer = styled.div`

`;