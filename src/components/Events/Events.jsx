import React from "react";
import styled from "styled-components";
import { HOST, PORT } from "../../prodURL";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

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

export const Events = ({ eventsType }) => {
    const [events, setEvents] = useState([]);
    const EVENTS_URL = `http://${HOST}:${PORT}/${eventsType}`
    useEffect(() => {
        fetch(EVENTS_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => resp.json())
            .then(resp => {setEvents(resp);console.log({resp});})
            .catch(error => console.log({ error }))
    }, []);

    return (
        <StyledContainer>
            {events.map((item, index) => (
                <EventCard
                    key={index}
                    props={{
                        id:item.id,
                        location: item.location,
                        datetime: item.datetime,
                        hour: item.hour,
                        description: item.description,
                        imgSrc: item.imgSrc,
                        title: item.title,
                        participants: item.participants,
                        isSubscribed:eventsType
                    }}
                />
            ))}
        </StyledContainer>
    );
};