import React, { useState, useEffect, useRef } from "react";
import { AppLogoContainer, LinkContainer, LinksContainer, ProfileContainer, TopNavbarWrapper, } from './TopNavbar.styled'
import UserDropdown from "../UserDropdown/UserDropdown";
import Logo from "../../assets/images/logo.png";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import Inventory2Icon from '@mui/icons-material/Inventory2';

interface ILinks {
    icon: React.ElementType;
    title: string;
}

const Links: ILinks[] = [
    {
        icon: DashboardSharpIcon,
        title: "Dashboard"
    },
    {
        icon: Inventory2Icon,
        title: "Inventory"
    },
]

const TopNavbar = () => {

    return (
        <TopNavbarWrapper>
            <AppLogoContainer src={Logo} alt="logo" className="left" />
            <LinksContainer className="left">
                {
                    Links.map(({icon: IconComponent, title}) => (
                        <LinkContainer>
                           <IconComponent />
                           {title}
                        </LinkContainer>
                    ))
                }
                
            </LinksContainer>
            <ProfileContainer className="right">
                <UserDropdown />
            </ProfileContainer>
        </TopNavbarWrapper>
    )
}

export default TopNavbar