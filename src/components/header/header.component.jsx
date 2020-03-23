import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './header.styles.css';

const Header = () => {
    return (
        <header>
            <img src={logo} className="Header-logo" alt="logo" />
            <nav>


                <Link to="/" className="navTag">Home</Link>
                <Link to="/about" className="navTag">About</Link>

            </nav>
        </header>
    )
}

export default Header;