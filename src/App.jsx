import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Chat from './components/Chat/Chat';
import Packages from './components/Navbar/Navbarlinks/Packages';
import About from './components/Navbar/Navbarlinks/About';
import Contact from './components/Navbar/Navbarlinks/Contact';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {location.pathname === '/' && <Main />}

      <Footer />
      <Chat />
    </>
  );
}

export default App;

