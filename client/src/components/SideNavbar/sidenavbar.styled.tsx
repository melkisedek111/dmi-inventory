import styled from "styled-components";


export const SideNavbarContainer = styled.div`
    /* position: absolute; */
    /* width: 100px; */
    /* height: 100vh; */
    background-color: #2178D0;
    display: flex;
    flex-direction: column;
    z-index: 10;
`;

export const IconLinkContainer = styled.div`
    .selected {
        border-left: 5px solid white;
    }
    svg {
        font-size: 30px;
    }
    
    > :not(.selected):hover {
        background-color: #fff;
        border-left: 5px solid #fff;
        
        svg {
            color: #2178D0;
        }
    }

    div {
        border-left: 5px solid #2178D0;
        padding: 10px 15px;
        color: #fff;
        background-color: #2178D0;


        cursor: pointer;
    }

`