import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    )
}

export default AppRoutes;