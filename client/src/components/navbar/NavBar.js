import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar_logo" onClick={() => navigate('/')}>
                IMK
            </div>
            <div className="navbar_links">
                <button className="navbar_button" onClick={() => navigate('/login')}>
                    Login
                </button>
                <button className="navbar_button" onClick={() => navigate('/register')}>
                    Register
                </button>
            </div>
        </nav>
    );
};

export default Navbar;