import React from 'react';
import {AddEventPopup} from './AddEventPopup';
import './PersonCard.css';

export const PersonCard = ({user}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOn, setIsOn] = React.useState(true);
    const handleEvent = (event) => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleIsOn=(value)=>{
        setIsOn(value);
        console.log(value);
        //to ad api call to it
    }

    return (
        <div className="PersonCard">
            <div className='PersonCard-left'>
                <p>
                    <b>FirstName: </b>{user.firstName}
                </p>
                <p>
                    <b>LastName: </b>{user.lastName}
                </p>
            </div>
            <div className='PersonCard-center'>
                <p>
                    <b>Email: </b>{user.email}
                </p>
                <p>
                    <b>Function: </b>{user.function}
                </p>
            </div>
            <div className='PersonCard-right'>
                <button className='AddEvent-button' onClick={handleEvent}>Add Event</button>
                <AddEventPopup isOpen={isOpen} handleClose={handleCloseModal}/>
                <p>
                    <b>Auto Events:   </b>
                    <label className="switch">
                        <input checked={isOn}  onChange={()=>{handleIsOn(!isOn)}} type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </p>
            </div>
        </div>
    );
};
