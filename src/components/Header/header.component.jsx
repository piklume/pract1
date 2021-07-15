import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header-container'>
        <Link className='header-options' to="/">HOME</Link>
        <Link className='header-options' to="/users">USERS</Link>
        <Link className='header-options' to="/posts">POSTS</Link>
        <Link className='header-options header-options-sign-in' to="/signin">SIGN-IN</Link>
    </div>
);

export default Header;