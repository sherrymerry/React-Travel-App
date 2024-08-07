import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbGridDots } from "react-icons/tb";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const showNav = () => {
        setActive('navBar activeNavbar');
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    const goToCart = () => {
        navigate('/cart');
    };

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
                       
                        <div className='cartContainer'>
                            <button className='cartBtn' onClick={goToCart}>
                                <FaShoppingCart className='cartIcon' />
                                {cartItems.length > 0 && <span className='cartCount'>{cartItems.length}</span>}
                            </button>
                        </div>
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
