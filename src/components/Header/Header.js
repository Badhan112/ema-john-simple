import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
            <img className="logo" src={logo} alt=""/>
            <nav className="nav-bar">
                <ul>
                    <li><a className="nav-bar-item" href="/shop">Shop</a></li>
                    <li><a className="nav-bar-item" href="/review">Order Review</a></li>
                    <li><a className="nav-bar-item" href="/inventory">Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;