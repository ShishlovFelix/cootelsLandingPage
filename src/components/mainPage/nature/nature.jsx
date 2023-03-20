import React from "react";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import houseImage from "../../../pictures/house.png";
import {
  MainLink,
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Nature = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing="32px">
        <Grid item xs={12} md={6}>
          <Stack justifyContent="center" height="100%" gap="32px">
            <MainTitle variant="h3">
              Nature, Warmth, and Beauty in One Space
            </MainTitle>
            <MainParagraph variant="body1">
              One place to release all the stress, bring back happines, and get
              back to nature. We provide the best room and nature for you. Come
              visit us anytime you want.
            </MainParagraph>
            <Stack sx={{ margin: { xs: "auto", md: "0" } }}>
              <MainLink to="/reservation">Reservation</MainLink>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={houseImage} alt="houseImage" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nature;
