import React from 'react';
import './Header.css';

const Header = () => {

    const handleRealoadPage = () => {
        window.location.reload();
    }
    return (
        <div className="header-container">
            <h1 onClick={handleRealoadPage}>Welcome to TheMealDB</h1>
        </div>
    );
};

export default Header;