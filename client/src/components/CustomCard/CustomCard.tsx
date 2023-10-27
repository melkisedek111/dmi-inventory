import React from 'react'
import { CustomCardBox, CustomCardHeader, CustomCardIconContainer, ValueContainer } from './customCard.styled'
import image from "../../assets/images/deadline.png"

export interface ICustomCard {
    titleHeader: string;
    image: string;
    value: number | string;
}

const CustomCard: React.FC<ICustomCard> = ({ titleHeader, image, value }: ICustomCard) => {
    return (
        <CustomCardBox>
            <CustomCardHeader>
                <p>{titleHeader}</p>
            </CustomCardHeader>
            <CustomCardIconContainer>
                <img src={image} alt={titleHeader} />
                <ValueContainer>
                    {
                        typeof value === "number" ? (
                            <>
                                <h1>{value}</h1>
                                <span>Item(s)</span>
                            </>
                        ) : (
                            <p>{value}</p>

                        )
                    }
                </ValueContainer>
            </CustomCardIconContainer>
        </CustomCardBox>
    )
}

export default CustomCard