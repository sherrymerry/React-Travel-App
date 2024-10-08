import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Chat from "./components/Chat/Chat";
import Packages from './components/Navbar/Navbarlinks/Packages';
import About from './components/Navbar/Navbarlinks/About';
import Contact from './components/Navbar/Navbarlinks/Contact';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/contexts/CartContext';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home onSearch={setSearchQuery} />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            {location.pathname === '/' && <Main searchQuery={searchQuery} />}
            <Footer />
            <Chat />
        </CartProvider>
    );
}

export default App;
