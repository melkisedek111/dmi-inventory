import styled from "styled-components";


export const TopNavbarContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0px 25px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;


export const LogoContainer = styled.p`
    span {
        margin: 0;
        font-size: 25px;
    }

    span:nth-child(1) {
        color: blue;
    }

    span:nth-child(2) {
        font-weight: bold;
    }

    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    height: inherit;
    border-right: 1px solid lightgray;
    padding-right: 20px;
`;

export const PageTitleContainer = styled.div`
    h4 {
        font-size: 1.7rem;
    }
`;

export const AvatarContainer = styled.div`

`;