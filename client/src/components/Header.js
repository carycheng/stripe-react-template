import React from 'react';
import logo from '../public/images/stripe.png';
import '../public/styles/Header.css';

const Header = () => {
    return (
        <div class="ui fixed inverted menu">
            <div class="container">
                <img src={logo} class="logo"/>
                <div class="item">ReactJS Template</div>
            </div>
        </div>
    );
};

export default Header;