import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
            <img className="logo" src={logo} alt=""/>
            <nav className="nav-bar">
                <ul>
                    <li><Link className="nav-bar-item" to="/shop">Shop</Link></li>
                    <li><Link className="nav-bar-item" to="/review">Order Review</Link></li>
                    <li><Link className="nav-bar-item" to="/inventory">Inventory</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;