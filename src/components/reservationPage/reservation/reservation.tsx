import React from "react";
import { Grid } from "@mui/material";
import houseImage from "../../../pictures/house.png";
import Container from "@mui/material/Container";
import {
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Reservation = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "125px" }}>
          <MainTitle>Nature, Warmth, and Beauty in One Space</MainTitle>
        </Grid>
        <Grid item xs={6} sx={{ margin: "80px auto" }}>
          <img src={houseImage} alt="noPicture" style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "block", textAlign: "center", margin: "40px auto" }}
        >
          <MainParagraph>
            There is a room for every needs. We have room for individuals until
            family size, we also have a cabin for more private experience Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo,
            quibusdam. Aspernatur culpa cum eum fuga ipsa itaque laboriosam modi
            nulla numquam, optio porro possimus provident, quaerat quidem quod
            saepe, sunt tempora veritatis! Aliquam, aut cumque cupiditate
            explicabo fuga molestiae molestias nulla odio pariatur possimus
            provident quas, quia tempore vero. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cumque et hic iusto minus nihil
            officiis perferendis quo sint voluptatem voluptates? Animi autem
            commodi consectetur dicta dignissimos dolore ea esse, illo ipsa
            ipsam iure laudantium neque non, quis quo saepe voluptatibus?
            Adipisci et, exercitationem inventore minus obcaecati optio
            perferendis porro praesentium!
          </MainParagraph>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reservation;
