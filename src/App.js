import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import EventDetailsPage from "./components/EventDetailsPage/EventDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="*" element={<MainPage />} />
                    <Route path="/event" element={<EventDetailsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
