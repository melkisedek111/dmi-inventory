import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import { AppContainer } from './App.styled';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
    return (
        <AppContainer>
            <TopNavbar />
            <Dashboard/>
        </AppContainer>
    );
}

export default App;
