// App.js
import React from 'react';
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import Home from './componenets/Home';

import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BarChart from './componenets/barchart/BarChart'
import './App.css'
const App = () => {
  

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/overview" element ={<Home/>}/>
      <Route path="/dashboard" element ={<Dashboard/>}/>
      <Route path="/" element={<Navigate to="/overview" />} />

    </Routes>
    <BarChart/>
    <Footer/>
    </BrowserRouter>

    </div>
  );
};

export default App;
