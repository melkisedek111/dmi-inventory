import React from 'react'
import { DashboardContainer, MainDashboardContainer, PageTitleHeader, ReportContainer, SideContainer, TransactionTableContainer } from './dashboard.styled'
import expired from "../../assets/images/deadline.png";
import outOfStock from "../../assets/images/out-of-stock.png";
import totalAvailableStocks from "../../assets/images/packages.png";
import lastItemConsumed from "../../assets/images/list-items.png"

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import PieChart from '../../components/PieChart/PieChart';
import LineChart from '../../components/LineChart/LineChart';
import LatestRelease from '../../components/LatestRelease/LatestRelease';
import ReleaseHistory from '../../components/ReleaseHistory/ReleaseHistory';


const Dashboard = () => {

    return (
        <DashboardContainer>
            <PageTitleHeader>
                <DashboardRoundedIcon />
                <h3>Main Dashboard</h3>
            </PageTitleHeader>

            <MainDashboardContainer>
                <ReportContainer>
                    <CardsContainer />
                    <ReleaseHistory />
                    <LineChart />
                </ReportContainer>
                <SideContainer>
                    <PieChart />
                    <LatestRelease />
                </SideContainer>
            </MainDashboardContainer>

        </DashboardContainer>
    )
}

export default Dashboard