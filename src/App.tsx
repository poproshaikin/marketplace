import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
    return (
        <div>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
