import React from 'react';
import './PersonCard.css';
import Button from '@mui/material/Button';

export const PersonCard = ({ user }) => {
    return (
        <div className="PersonCard">
            <div className='PersonCard-left'>
                <p>
                    <b>FirstName: </b>{user.firstName}
                </p>
                <p>
                    <b>LastName: </b>{user.lastName}
                </p>
                <p>
                    <b>Email: </b>{user.email}
                </p>
                <p>
                    <b>Function: </b>{user.func}
                </p>
            </div>
            <div className='PersonCard-center'></div>
            <div className='PersonCard-right'>
                <Button variant="outlined">Add Event</Button>
            </div>
        </div>
    );
};