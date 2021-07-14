import React from 'react';
import { Link } from 'react-router-dom';

import './directory.styles.scss';

const Directory = () => {

    return (
        <div className='directory-container'>
            <Link className='option-link' to="/users">USERS</Link>
            <Link className='option-link' to="/posts">POSTS</Link>
        </div>
    );
}

export default Directory;