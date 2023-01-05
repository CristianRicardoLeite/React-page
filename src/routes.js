import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import App from './pages/pageHome'
import App1 from './pages/pageUsers'

function pageRoutes () {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/usuarios" element={<App1/>}/>
            </Routes>
        </ Router>
    )
} 

export default pageRoutes