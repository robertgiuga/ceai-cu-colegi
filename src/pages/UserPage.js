import React from "react";
import { Events } from "../components/Events/Events";
import { Navbar } from "../components/Navbar/Navbar";
import { PersonCard } from "../components/PersonCard/PersonCard";
import "./UserPage.css";
import { useEffect } from "react";
import { HOST, PORT } from "../prodURL";

const UserPage = () => {
  return (
    <div className="UserPage">
      <Navbar />
      <PersonCard />
      <Events eventsType={"subscribed"} />
    </div>
  );
};

export default UserPage;
