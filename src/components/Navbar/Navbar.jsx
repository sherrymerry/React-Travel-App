import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import Packages from './Navbarlinks/Packages';
// import About from './Navbarlinks/About';
// import Contact from './Navbarlinks/Contact'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>

                <div className='logoDiv'>
                    <Link to="/" className='logo flex'>
                        <h1><MdOutlineTravelExplore className='icon' />Travel.</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <Link to="/" className="navLinks">Home</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/packages" className="navLinks">Packages</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/about" className="navLinks">About</Link>
                        </li>
                        <li className='navItem'>
                            <Link to="/contact" className="navLinks">Contact</Link>
                        </li>
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
}

export default Navbar;
