import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import PetList from './components/list/PetList';

import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app-container'>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/petList/:animalType" element={<PetList/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
