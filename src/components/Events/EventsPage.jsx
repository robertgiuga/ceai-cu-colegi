import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { HOST,PORT } from "../../prodURL.js";
import { Navbar } from "../Navbar/Navbar";
import { Events } from "./Events";
import { StyledContainer } from "./Events";
import EventCard from './EventCard'

export function EventsPage() {
  const [events, setEvents] = useState([]);
  const EVENTS_URL = `http://${HOST}:${PORT}/subscribed`
  useEffect(() => {
    fetch(EVENTS_URL,{headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }}).then(resp => resp.json())
    .then(resp => setEvents(resp))
    .catch(error => console.log({error}))
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <StyledContainer>
          {events.map((item, index) => (
            <EventCard
              props={{
                location: item.location,
                datetime: item.datetime,
                description: item.description,
                imgSrc: item.imgSrc,
                title: item.title,
                participants: item.participants,
              }}
            />
          ))}
        </StyledContainer>
      </div>
    </>
  );
}