import React from "react";
import Container from "@mui/material/Container";
import { Grid, Stack } from "@mui/material";
import picture1 from "../../../pictures/cabinPicture1.jpg";
import picture2 from "../../../pictures/cabinPicture2.jpg";
import {
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Cabin = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing="32px" marginTop={{ xs: "100px", md: "80px" }}>
        <Grid item xs={12} md={7}>
          <Stack
            justifyContent="center"
            height="100%"
            gap="32px"
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            <MainTitle variant="h3">Cabin Activities</MainTitle>
            <MainParagraph variant="body1">
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </MainParagraph>
          </Stack>
        </Grid>
        <Grid xs={12} md={5} sx={{ textAlign: "center" }}>
          <img src={picture1} alt="noImage" />
        </Grid>
      </Grid>
      <Grid container spacing="32px" marginTop={{ xs: "100px", md: "160px" }}>
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <img src={picture2} alt="houseImage" />
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack
            justifyContent="center"
            height="100%"
            gap="32px"
            sx={{ textAlign: { xs: "center", md: "start" } }}
          >
            <MainTitle variant="h3">100% Organic Food</MainTitle>
            <MainParagraph variant="body1">
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </MainParagraph>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cabin;
