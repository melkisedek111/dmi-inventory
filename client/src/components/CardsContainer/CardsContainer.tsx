import React from 'react'
import HourglassDisabledRoundedIcon from '@mui/icons-material/HourglassDisabledRounded';
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import { CustomCardContainer, CustomCardsContainer } from './cardContainer.styled';




const CardsContainer = () => {
    return (
        <CustomCardsContainer>
            <CustomCardContainer fontColor="59 130 246">
                <HourglassDisabledRoundedIcon />
                <div>
                    <h5>Total Nearly Expired</h5>
                    <h4>49</h4>
                    <span>Note: Items will be expired within 20 days</span>
                </div>
            </CustomCardContainer>
            <CustomCardContainer fontColor="102 37 199">
                <DomainVerificationRoundedIcon />
                <div>
                    <h5>Total Nearly Out of Stock</h5>
                    <h4>10</h4>
                    <span></span>
                </div>
            </CustomCardContainer>
            <CustomCardContainer fontColor="191 136 24">
                <Inventory2RoundedIcon />
                <div>
                    <h5>Total Item Stock</h5>
                    <h4>2911</h4>
                    <span></span>
                </div>
            </CustomCardContainer>
            <CustomCardContainer fontColor="35 158 204">
                <NewReleasesRoundedIcon />
                <div>
                    <h5>Latest Release</h5>
                    <h4>Reagent - B Medicine 1</h4>
                    <span></span>
                </div>
            </CustomCardContainer>
        </CustomCardsContainer>
    )
}

export default CardsContainer