import React from 'react';
import './App.css';
import { EventsPage } from './components/Events/EventsPage';
import AuthForm from "./components/Auth/AuthForm";
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./components/Auth/auth-context";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthContextProvider />}>
          <Route path="/" element={<AuthForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/events" element={<EventsPage  />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
