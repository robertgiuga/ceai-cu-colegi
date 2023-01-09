import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { styled } from "@mui/material/styles";
import { colorCoralPale, colorLightGrey } from "../../assets/styles/colors";
import { HOST, PORT } from "../../prodURL";
import axios from "axios";

const StyledButton = styled(Button)({
  ":hover": {
    backgroundColor: colorCoralPale,
  },
});

const StyledCard = styled(Card)({
  backgroundColor: colorLightGrey,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});

//props should contain, token,event id
export default function EventCard({ props }) {
  const eventId = props.id;
  const token = localStorage.getItem("token");
  const [isDisabled,setIsDisabled] = React.useState(props.isSubscribed === "subscribed" ? true: false)
  const USER_EVENT_SUBSCRIPTION = `http://${HOST}:${PORT}/subscribe/${eventId}`;
  const onSubscribeClick = () => {
    axios
        .post(USER_EVENT_SUBSCRIPTION , {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          console.log(resp);
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
  };


  return (
    <StyledCard sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {props.title}
      </Typography>
      <Typography level="body2">{props.datetime?.toLocaleString()}</Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={props.imgSrc} loading="lazy" alt="" />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">Participants:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.participants.length}
          </Typography>
        </div>
        <StyledButton
          variant="solid"
          size="sm"
          aria-label="A button"
          sx={{ ml: "auto", fontWeight: 600 }}
          onClick={onSubscribeClick}
          disabled={isDisabled}
        >
          
          {props.isSubscribed === "unsubscribed" ? <em>Subscribe</em> : <em>Subscribed</em> }
        </StyledButton>
      </Box>
    </StyledCard>
  );
}
