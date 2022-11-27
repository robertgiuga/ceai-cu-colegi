import React from 'react';
import './App.css';
import AuthForm from "./components/Auth/AuthForm";
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const User = (id, firstName, lastName, email, func) => { return { id: id, firstName: firstName, lastName: lastName, email: email, func: func } }

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/userPage/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;