import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import AvailableColors from './components/AvailableColors';
import ContactUs from './components/ContactUs';
import './NavBar.css';


function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/available-colors">Available Colors</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/available-colors" element={<AvailableColors />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;
