import React from 'react';
import './App.css';
<<<<<<< HEAD
import { EventsPage } from './components/EventsPage';
=======
import AuthForm from "./components/Auth/AuthForm";
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> master

export const User = (id, firstName, lastName, email, func) => { return { id: id, firstName: firstName, lastName: lastName, email: email, func: func } }

const App = () => {
  return (
<<<<<<< HEAD
    <EventsPage/>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/userPage/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> master
  );
};

export default App;