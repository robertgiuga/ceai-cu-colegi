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
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
    {
        title: "Title 1",
        location: "Location 1",
        datetime: new Date().toLocaleString(),
        description: "Beautiful description",
        participants: 0,
        imgSrc:
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
    },
];

export const StyledContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
grid-template-rows: auto;
row-gap: 2rem;
align-items: center;
justify-items: center;
margin-top: 3rem;
margin-bottom: 3rem;
margin-left: 2rem;
margin-right: 2rem;
`;

export const Events = ({ userId }) => {

    {/*
             If userId=null => allEvents,
             If userId!=null => events where a user participates 
             => backend
    */}
    //const events = userId !== null ? getAllEvents() : getEventsUser(userId);
    const events = eventsMock;

    return (
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
    );
};