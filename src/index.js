import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import Home from './components/pages/Home';
import ApartmentPage from './components/pages/ApartmentPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /> <Banner /> <Home /> <Footer /></>} />
        <Route path="/flat" element={<><Navbar /> <ApartmentPage /> <Footer /></>} />
        <Route path="/about" element={<><Navbar /> <Banner /> <Footer /></>} />
        <Route path="*" element={<><Navbar /> <Footer /></>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


