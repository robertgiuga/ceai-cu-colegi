import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import {styled} from "@mui/material/styles";
import {colorCoralPale } from "../assets/styles/colors";

const StyledButton = styled(Button)({
  ":hover":{
    backgroundColor: colorCoralPale
  }
})


export default function EventCard({ props }) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {props.title}
      </Typography>
      <Typography level="body2">{props.datetime.toLocaleString()}</Typography>
    
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={props.imgSrc}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">Participants:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.participants}
          </Typography>
        </div>
        <StyledButton
          variant="solid"
          size="sm"       
          aria-label="A button"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Subscribe
        </StyledButton>
      </Box>
    </Card>
  );
}
