import React from 'react';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.components';

const Homepage = () => {

    return (
        <div className='homepage-container'>
            <h1>HomePage</h1>
            <Directory />
        </div>
    );
}

export default Homepage;