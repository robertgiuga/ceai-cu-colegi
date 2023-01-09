import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Events, } from "./Events";

export function EventsPage() {
  return (
    <>
      <div>
        <Navbar />
        <Events eventsType={"unsubscribed"} />
      </div>
    </>
  );
};