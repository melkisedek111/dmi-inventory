import styled from "styled-components";

export const UserDropdownContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    position: relative;
    cursor: pointer;
`

export const UserDropdownMenu = styled.div`
    position: absolute;
    background-color: #f0f0f0;
    right: 0;
    bottom: -35px;
    border-radius: 5px;

    ul {
        list-style-type: none;
        cursor: pointer;
        border-radius: 5px;
        li {
            padding: 5px 20px;
        }
    }

    ul:hover { 
        background-color: #01ccbb;
        color: #fff;

    }
`