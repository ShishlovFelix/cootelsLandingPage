import React from "react";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import picture1 from "../../../pictures/manyPicture1.jpg";
import picture2 from "../../../pictures/manyPicture2.jpg";
import picture3 from "../../../pictures/manyPicture3.jpg";
import {
  CardLink,
  CardTitle,
  MainLink,
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Many = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "1176px",
      }}
    >
      <Grid container marginTop={{ xs: "100px", md: "160px" }}>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          <MainTitle variant="h3">Many Rooms to Choose</MainTitle>
          <MainParagraph marginTop="32px" variant="body1">
            There is a room for every needs. We have room for individuals until
            family size, we also have a cabin for more private experience
          </MainParagraph>
          <Stack xs={12} marginTop="32px">
            <MainLink sx={{ margin: "auto" }} to="/rooms">
              Explore more
            </MainLink>
          </Stack>
        </Grid>
        <Stack
          flexDirection="row"
          container
          columnGap="24px"
          sx={{
            marginTop: "88px",
            "& img": {
              width: "100%",
            },
          }}
        >
          <Grid item xs={4}>
            <img src={picture1} alt="no picture" />
            <CardTitle sx={{ marginTop: "16px" }}>Single Room</CardTitle>
            <MainParagraph sx={{ marginTop: "16px" }}>
              Best for a brave lone wolf who need comfort and quiet quality
              time, but you still have a chance to meet others.
            </MainParagraph>
            <Stack flexDirection="row" sx={{ marginTop: "16px" }}>
              <CardLink to="/rooms">Learn more</CardLink>
              <ArrowForwardIcon sx={{ color: "#424F7B" }} />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <img src={picture2} alt="no picture" />
            <CardTitle sx={{ marginTop: "16px" }}>Double Room</CardTitle>
            <MainParagraph sx={{ marginTop: "16px" }}>
              Best for couple, seek happiness in intimacy without worry of being
              disturbed. Feel the whole world just for you two
            </MainParagraph>
            <Stack flexDirection="row" sx={{ marginTop: "16px" }}>
              <CardLink to="/rooms">Learn more</CardLink>
              <ArrowForwardIcon sx={{ color: "#424F7B" }} />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <img src={picture3} alt="no picture" />
            <CardTitle sx={{ marginTop: "16px" }}>Cootage</CardTitle>
            <MainParagraph sx={{ marginTop: "16px" }}>
              Best for family or group. One cootage can fit up to 5 people. Made
              stronger bond with your family or friends
            </MainParagraph>
            <Stack flexDirection="row" sx={{ marginTop: "16px" }}>
              <CardLink to="/rooms">Learn more</CardLink>
              <ArrowForwardIcon sx={{ color: "#424F7B" }} />
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
};

export default Many;
