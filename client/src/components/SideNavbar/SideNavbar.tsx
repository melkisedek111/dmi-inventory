import React from 'react'
import { IconLinkContainer, SideNavbarContainer } from './sidenavbar.styled'

import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <SideNavbarContainer>
            <IconLinkContainer>
                <Link to="/">
                    <div className="selected">
                        <DashboardRoundedIcon />
                    </div>
                </Link>

                <Link to="/inventory">
                    <div>
                        <VaccinesRoundedIcon />
                    </div>
                </Link>
                <div>
                    <SettingsRoundedIcon />
                </div>
            </IconLinkContainer>
        </SideNavbarContainer>
    )
}

export default SideNavbar