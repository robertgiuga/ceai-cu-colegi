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

export const Events = ({ userId }) => {
    const [events, setEvents] = useState([]);
    const SUBSCRIBED_URL = `http://${HOST}:${PORT}/subscribed`
    const UNSUBSCRIBED_URL = `http://${HOST}:${PORT}/unsubscribed`
    useEffect(() => {
        fetch(userId !== null ? SUBSCRIBED_URL : UNSUBSCRIBED_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => resp.json())
            .then(resp => setEvents(resp))
            .catch(error => console.log({ error }))
    }, []);

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
                        userId: userId
                    }}
                />
            ))}
        </StyledContainer>
    );
};