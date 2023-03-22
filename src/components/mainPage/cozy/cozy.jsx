import React from "react";
import Container from "@mui/material/Container";
import { Grid, Stack } from "@mui/material";
import picture from "../../../pictures/cozyPicture.jpg";
import {
  MainLink,
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Cozy = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing="32px" marginTop={{ xs: "100px", md: "160px" }}>
        <Grid item xs={12} md={6}>
          <img src={picture} alt="houseImage" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            justifyContent="center"
            height="100%"
            gap="32px"
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            <MainTitle variant="h3">
              Cozy and Down to Earth Cootage Hotel in Norway.
            </MainTitle>
            <MainParagraph variant="body1">
              Our Cootage Hotel is an intimate hideway concieved for dicerning
              travelers. It faces directly the unique and spectacular panorama
              of the Hallerbos Jungle.
            </MainParagraph>
            <MainParagraph variant="body1">
              Cootels extends along a private, quiet, and beautiful nature. Stay
              away from crowd and enjoy the cozy and beauty with us.
            </MainParagraph>
            <Stack sx={{ margin: { xs: "auto", md: "0" } }}>
              <MainLink to="/rooms">Learn More</MainLink>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cozy;
