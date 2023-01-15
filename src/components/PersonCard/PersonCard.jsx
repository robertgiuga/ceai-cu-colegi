import React from 'react';
import { AddEventPopup } from './AddEventPopup';
import './PersonCard.css';
import { HOST, PORT } from '../../prodURL';
import axios from "axios";

export const PersonCard = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [user, setUser] = React.useState("");
    const [isOn, setIsOn] = React.useState(false);

    const USER_URL = `http://${HOST}:${PORT}/user-info`;
    React.useEffect(() => {
        fetch(USER_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => setUser(resp))
            .catch((error) => console.log({ error }));
    }, [isOn]);

    React.useEffect(() => {
        setIsOn(user.approval === "true" ? true : false);
    }, [user]);

    const handleEvent = (event) => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleIsOn = (value) => {
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
                    <b>Position: </b>{user.function}
                </p>
            </div>
            <div className='PersonCard-right'>
                <p className='auto'>
                    <b>Auto Events:   </b>
                    <label className="switch">
                        <input checked={isOn} onChange={() => handleIsOn(!isOn)} type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </p>
                <button className='AddEvent-button' onClick={handleEvent}>Add Event</button>
                <AddEventPopup isOpen={isOpen} handleClose={handleCloseModal} />
            </div>
        </div>
    );
};
