import styled from "styled-components";

export const LatestReleaseContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
`;

export const LatestReleaseTable = styled.table`
    border: 1px solid #DEDEDF;
    border-collapse: collapse;
    width: 100%;
    /* border-style: solid; */

    thead > tr > th {
        text-align: center;
        padding: 10px 5px;
    }

    th {
        border-width: 1px;
        border-color: #DEDEDF;
        border-style: solid;
    }

    td {
        border-width: 1px;
        border-color: #DEDEDF;
        border-style: solid;
        text-align: center;
        padding: 10px 5px;
        font-size: 14px;
        color:  rgb(97 97 97);
    }
`;

export const LatestReleaseHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h5 {
        font-size: 20px;
    }
`;