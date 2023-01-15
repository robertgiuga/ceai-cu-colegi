import React, { useContext } from 'react';
import './Navbar.css';
import PersonIcon from '@mui/icons-material/Person';
import { BRAND, HISTORY, LOGOUT } from '../../constants';
import { Link } from 'react-router-dom';
import AuthContext from "../Auth/auth-context";
import HistoryIcon from '@mui/icons-material/History';

export const Navbar = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div className="Navbar">
            <div className="Navbar-left"></div>
            <div className="Navbar-center">
                <Link to={`/events`} className="Navbar-Link" >
                    <p className="Navbar-title" >{BRAND}</p>
                </Link>
            </div>
            <div className="Navbar-right">
                <Link to={`/historyPage`} className="Navbar-Link">
                    <HistoryIcon className="Navbar-item" />
                </Link>
                <Link to={`/userPage`} className="Navbar-Link">
                    <PersonIcon className="Navbar-item" />
                </Link>
                <p className="Navbar-item" onClick={() => { authCtx.logout() }}>{LOGOUT}</p>
            </div>
        </div>
    );
};