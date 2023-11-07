import React from 'react'
import { AvatarContainer, LogoContainer, PageTitleContainer, TopNavbarContainer } from './topnavbar.styled'

const TopNavbar = () => {
  return (
    <TopNavbarContainer>
        <LogoContainer>
            <span>m|</span>
            <span>connect</span> 
            <span>inventory</span>
        </LogoContainer>
        <PageTitleContainer>
            <h4>Item Inventory</h4>
        </PageTitleContainer>
        <AvatarContainer>

        </AvatarContainer>
    </TopNavbarContainer>
  )
}

export default TopNavbar