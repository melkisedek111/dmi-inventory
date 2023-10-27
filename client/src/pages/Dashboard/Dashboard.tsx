import React from 'react'
import { CustomCardContainer, DashboardContainer, TransactionTableContainer } from './dashboard.styled'
import CustomCard, { ICustomCard } from '../../components/CustomCard/CustomCard'
import expired from "../../assets/images/deadline.png";
import outOfStock from "../../assets/images/out-of-stock.png";
import totalAvailableStocks from "../../assets/images/packages.png";
import lastItemConsumed from "../../assets/images/list-items.png"
import StickyHeadTable from '../../components/CustomTable/CustomTable';

const Dashboard = () => {

    const customCards: ICustomCard[] = [
        {
            titleHeader: "Nearly Expired",
            image: expired,
            value: 20
        },
        {
            titleHeader: "Nearly Out of Stock",
            image: outOfStock,
            value: 120
        },
        {
            titleHeader: "Total Available Items",
            image: totalAvailableStocks,
            value: 520
        },
        {
            titleHeader: "Last Item Released/Consumed",
            image: lastItemConsumed,
            value: "Reagent - B"
        },
    ] 

    return (
        <DashboardContainer>
            <CustomCardContainer>
                {
                    customCards.map(item => <CustomCard titleHeader={item.titleHeader} image={item.image} value={item.value} />)
                }
            </CustomCardContainer>
            <TransactionTableContainer>
                <h1>Transaction History</h1>
                <StickyHeadTable />
            </TransactionTableContainer>
        </DashboardContainer>
    )
}

export default Dashboard