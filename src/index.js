import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About";
import Home from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';
import ApartmentPage from './components/pages/ApartmentPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flat" element={<ApartmentPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);


