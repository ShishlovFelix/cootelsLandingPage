import React from "react";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import {
  FooterLink,
  FooterParagraph,
  FooterTitle,
} from "../../../layoutStylesComponents/BaseComponents";
import { BaseImage } from "@/src/layoutStylesComponents/BaseImage";

const picture1 = "/pictures/twitter.svg";
const picture2 = "/pictures/instagram-logo.svg";
const picture3 = "/pictures/facebook.svg";

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
            <FooterLink href="/contacs">Your Best Private </FooterLink>
            <FooterLink href="/contacs">Hideway From Crowd.</FooterLink>
            <FooterLink href="/contacs">Back to Nature.</FooterLink>
          </Stack>
          <Stack
            flexDirection="row"
            columnGap="30px"
            marginTop="50px"
            width="200px"
          >
            <BaseImage src={picture1} alt="noPicture" />
            <BaseImage src={picture2} alt="noPicture" />
            <BaseImage src={picture3} alt="noPicture" />
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Rooms</FooterParagraph>
            <FooterLink href="/contacs">Single Room</FooterLink>
            <FooterLink href="/contacs">Double Room</FooterLink>
            <FooterLink href="/contacs">Cabin</FooterLink>
            <FooterLink href="/contacs">Custom Room</FooterLink>
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Rooms</FooterParagraph>
            <FooterLink href="/contacs">Reservation</FooterLink>
            <FooterLink href="/contacs">See the Steps</FooterLink>
            <FooterLink href="/contacs">Best Time</FooterLink>
          </Stack>
        </Grid>
        <Grid xs={3} md={2}>
          <Stack gap="25px">
            <FooterParagraph>Contact</FooterParagraph>
            <FooterLink href="/contacs">Our Number</FooterLink>
            <FooterLink href="/contacs">Our Email</FooterLink>
            <FooterLink href="/contacs">Our Location</FooterLink>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
