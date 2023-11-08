import React from 'react';
import './App.css';
import { AppContainer, MainContainer } from './App.styled';
import TopNavbar from './components/TopNavbar/TopNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory/Inventory';

function App() {
    return (
        <AppContainer>
            {/* Top Navbar */}
            <TopNavbar />
            {/* Side Navbar */}
            <MainContainer>
                <SideNavbar />
                {/* Main */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inventory" element={<Inventory />} />
                </Routes>
                
            </MainContainer>

        </AppContainer>
    );
}

export default App;
