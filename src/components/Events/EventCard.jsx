import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import {styled} from "@mui/material/styles";
import {colorCoralPale, colorLightGrey, colorCoralPaleLight} from "../../assets/styles/colors";
import {HOST, PORT} from "../../prodURL";
import axios from "axios";

const StyledCard = styled(Card)({
    backgroundColor: colorLightGrey,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});

//props should contain, token,event id
export default function EventCard({props}) {
    const eventId = props.id;
    const token = localStorage.getItem("token");
    const [isDisabled, setIsDisabled] = React.useState(
        props.isSubscribed === "subscribed" ? true : props.isSubscribed === "expired" ? true : false
    );
    const [isRejectDisabled, setIsRejectDisabled] = React.useState(
        props.isSubscribed === "subscribed" ? false : props.isSubscribed === "expired" ? false : true
    );
    const USER_EVENT_SUBSCRIPTION = `http://${HOST}:${PORT}/subscribe/${eventId}`;
    const USER_EVENT_UNSUBSCRIBE = `http://${HOST}:${PORT}/user/unsubscribe/${eventId}`;
    const onSubscribeClick = () => {
        axios
            .post(
                USER_EVENT_SUBSCRIPTION,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((resp) => {
                console.log(resp);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onRejectEvent = () =>{
        axios
            .get(
                USER_EVENT_UNSUBSCRIBE,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((resp) => {
                console.log(resp);
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const StyledButton = styled(Button)({
        ":hover": {
            backgroundColor: colorCoralPale,
        },
        backgroundColor: props.userId !== null ? colorCoralPale : colorLightGrey,
        ":disabled": {
            backgroundColor: "#a9a9a9",
        },
    });

    return (
        <StyledCard sx={{width: 320}}
                    style={{"backgroundColor": props.type === 'public' ? colorLightGrey : colorCoralPaleLight}}>
            <Typography level="h2" fontSize="25px" sx={{mb: 0.5}}
                        style={{display: "flex", justifyContent: "space-between", alignItems: "middle"}}>
                {props.title}
                <StyledButton
                    variant="solid"
                    size="sm"
                    aria-label="A button"
                    sx={{ml: "auto", fontWeight: 600}}
                    onClick={onRejectEvent}
                    disabled={isRejectDisabled}
                >
                    <em>Reject</em>
                </StyledButton>
            </Typography>
            <Typography level="body4"><b>location: </b>{props.location?.toLocaleString()}</Typography>
            <Typography level="body2" style={{display: "flex", justifyContent: "space-between"}}>
                <em>{props.type.toString().toUpperCase()}</em>
                {props.datetime?.toLocaleString() + ' ' + props.hour?.toLocaleString()}
            </Typography>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{my: 2}}>
                <img src={props.imgSrc} loading="lazy" alt=""/>
            </AspectRatio>
            <Box sx={{display: "flex"}}>
                <div>
                    <Typography level="body5">Participants:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {props.participants.length}
                    </Typography>
                </div>
                <StyledButton
                    variant="solid"
                    size="sm"
                    aria-label="A button"
                    sx={{ml: "auto", fontWeight: 600}}
                    onClick={onSubscribeClick}
                    disabled={isDisabled}
                >
                    {props.isSubscribed === "unsubscribed" ? (
                        <em>Subscribe</em>
                    ) : (
                        <em>Subscribed</em>
                    )}
                </StyledButton>
            </Box>
        </StyledCard>
    );
}
