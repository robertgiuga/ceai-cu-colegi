import React from "react";
import { Events } from "../components/Events/Events";
import { Navbar } from "../components/Navbar/Navbar";
import { PersonCard } from "../components/PersonCard/PersonCard";
import "./UserPage.css";
import { useEffect } from "react";
import { HOST, PORT } from "../prodURL";

const UserPage = () => {
  const [user, setUser] = React.useState("");
  const USER_URL = `http://${HOST}:${PORT}/user-info`;
  useEffect(() => {
    fetch(USER_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setUser(resp))
      .catch((error) => console.log({ error }));
  }, [USER_URL]);

  return (
    <div className="UserPage">
      <Navbar />
      <PersonCard user={user} />
      <Events eventsType={"subscribed"} />
    </div>
  );
};

export default UserPage;
