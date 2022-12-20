import React from 'react';
import { AddEventPopup } from './AddEventPopup';
import './PersonCard.css';

export const PersonCard = ({ user }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleEvent = (event) => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="PersonCard">
            <div className='PersonCard-left'></div>
            <div className='PersonCard-center'>
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
                <button className='AddEvent-button' onClick={handleEvent}>Add Event</button>
                <AddEventPopup isOpen={isOpen} handleClose={handleCloseModal}/>
            </div>
            <div className='PersonCard-right'>
            </div>
        </div>
    );
};