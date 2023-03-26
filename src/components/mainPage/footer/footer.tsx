import React from "react";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import picture1 from "../../../pictures/twitter.svg";
import picture2 from "../../../pictures/instagram-logo.svg";
import picture3 from "../../../pictures/facebook.svg";
import {
  FooterLink,
  FooterParagraph,
  FooterTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#0B265A",
      }}
    >
      <Grid container padding="120px 0">
        <Grid item xs={3} md={6}>
          <Stack gap="20px">
            <FooterTitle>Cooltes</FooterTitle>
            <FooterLink to="/contacs">Your Best Private </FooterLink>
            <FooterLink to="/contacs">Hideway From Crowd.</FooterLink>
            <FooterLink to="/contacs">Back to Nature.</FooterLink>
          </Stack>
          <Stack flexDirection="row" columnGap="30px" marginTop="50px">
            <img src={picture1} alt="noPicture" />
            <img src={picture2} alt="noPicture" />
            <img src={picture3} alt="noPicture" />
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Rooms</FooterParagraph>
            <FooterLink to="/contacs">Single Room</FooterLink>
            <FooterLink to="/contacs">Double Room</FooterLink>
            <FooterLink to="/contacs">Cabin</FooterLink>
            <FooterLink to="/contacs">Custom Room</FooterLink>
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Rooms</FooterParagraph>
            <FooterLink to="/contacs">Reservation</FooterLink>
            <FooterLink to="/contacs">See the Steps</FooterLink>
            <FooterLink to="/contacs">Best Time</FooterLink>
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Contact</FooterParagraph>
            <FooterLink to="/contacs">Our Number</FooterLink>
            <FooterLink to="/contacs">Our Email</FooterLink>
            <FooterLink to="/contacs">Our Location</FooterLink>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
