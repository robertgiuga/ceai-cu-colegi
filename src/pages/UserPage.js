import React from 'react';
import { User } from '../App';
import { Events } from '../components/Events/Events';
import { Navbar } from '../components/Navbar/Navbar';
import { PersonCard } from '../components/PersonCard/PersonCard';
import './UserPage.css';

const UserPage = ({ userId }) => {

    //TO DO
    // find user with userId received through props -> backend
    const user = User(1, 'Andreea', 'Rus', 'andreea111@yahoo.com', 'director');

    return (
        <div className="UserPage">
            <Navbar />
            <PersonCard user={user} />
            <Events userId={1} />
        </div>
    );
};

export default UserPage;