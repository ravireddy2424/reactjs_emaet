
import React from 'react';

import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import BooksPage from './stores/pages/BooksPage';

import MobileSinglePage from './SinglePage/MobileSinglePage';



const App = () => {
    return (
        <div>
            
            
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/mobiles' element={<MobilePage />} />
                <Route path='/computers' element={<ComputerPage />} />
                <Route path='/books' element={<BooksPage />} />
                    <Route path='/mobiles/:id' element={<MobileSinglePage/> } />
            </Routes>
            
        </div>
    )
}

export default App