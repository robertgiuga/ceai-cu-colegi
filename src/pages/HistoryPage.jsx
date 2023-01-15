import React from "react";
import { Events } from "../components/Events/Events";
import { Navbar } from "../components/Navbar/Navbar";

const HistoryPage = () => {
  return (
    <div className="UserPage">
      <Navbar />
      <Events eventsType={"expired"} />
    </div>
  );
};

export default HistoryPage;