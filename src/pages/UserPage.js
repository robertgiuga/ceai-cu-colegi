import React from 'react';
import { User } from '../App';
import { Navbar } from '../components/Navbar/Navbar';
import { PersonCard } from '../components/PersonCard/PersonCard';
import './UserPage.css';

const UserPage = ({ userId }) => {

    //TO DO
    // find user with userId received through props -> backend
    const user = User(1,'Andreea', 'Rus', 'andreea111@yahoo.com', 'director');

    return (
        <div className="UserPage">
            <Navbar />
            <PersonCard user={user} />
            {/* TODO: add Events component. Send through props -> userId.
             If userId=null => allEvents,
             If userId!=null => events where a user participates */} 
        </div>
    );
};

export default UserPage;