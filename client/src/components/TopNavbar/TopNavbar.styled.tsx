import styled from "styled-components";

export const TopNavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    gap: 10px;
`;

export const LinkContainer = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    height: inherit;
    padding: 10px 0;

    svg {
        color: #595959;
    }

    &:hover {
        color: #01F7FE;
        svg {
            color: #01F7FE;
        }
    }

    position: relative;
    text-decoration: none;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, #01F7FE, #01F7FE);
        transition: width 0.3s ease;
    }

    &:hover::before {
        width: 100%;
    }
`;



export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
`

export const ProfileContainer = styled.div`
margin-left: auto;
`

export const AppLogoContainer = styled.img`
    height: 50px;
    object-fit: contain

`

