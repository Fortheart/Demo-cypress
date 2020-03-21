import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './header.styles.css';

const Header = () => {
    return (
        <header>
            <img src={logo} className="Header-logo" alt="logo" />
            <nav>
                <Link path="./" className="navTag">Home</Link>
                <Link path="./" className="navTag">About</Link>
                <Link path="./" className="navTag">Login</Link>
            </nav>
        </header>
    )
}

export default Header;