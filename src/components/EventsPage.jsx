import React from "react";
import styled from "styled-components";
import EventCard from "./EventCard";

const eventsMock = [
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
  {
    title: "Title 1",
    location: "Location 1",
    datetime: new Date().toLocaleString(),
    description: "Beautiful description",
    participants: 0,
    imgSrc: "",
  },
];

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 20px;
`;

export function EventsPage() {
  return (
    <StyledContainer>
      {eventsMock.map((item, index) => (
        <EventCard />
      ))}
    </StyledContainer>
  );
}
