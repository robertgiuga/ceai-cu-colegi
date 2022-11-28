import React from 'react';
import './Navbar.css';
import PersonIcon from '@mui/icons-material/Person';
import { BRAND, LOGOUT, SIGN_IN } from '../../constants';
import { Link } from 'react-router-dom';
import { User } from '../../App';

export const Navbar = () => {
    const user = User(1, 'Andreea', 'Rus', 'andreea111@yahoo.com', 'director');
    return (
        <div className="Navbar">
            <div className="Navbar-left"></div>
            <div className="Navbar-center">
                <p>{BRAND}</p>
            </div>
            <div className="Navbar-right">
                <Link to={`/userPage/${user.id}`}>
                    <PersonIcon className="Navbar-item" />
                </Link>
                <p className="Navbar-item">{LOGOUT}</p>
            </div>
        </div>
    );
};
