import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import picture1 from "../../../pictures/naturePicture1.jpg";
import picture2 from "../../../pictures/naturePicture2.jpg";
import picture3 from "../../../pictures/naturePicture3.jpg";
import Container from "@mui/material/Container";

const Reservation = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "block", height: "1176px" }}>
      <Grid container sx={{ display: "block" }}>
        <Grid item xs={12} sx={{ display: "block", textAlign: "center" }}>
          <Typography
            sx={{
              marginTop: "168px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
              color: "#192252",
            }}
          >
            Nature, Warmth, and Beauty in One Space
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0px 0px 0px 225px",
          }}
        >
          <Grid
            xs={2}
            sx={{
              margin: "80px 24px 0px 0px",
            }}
          >
            <img src={picture1} alt="no picture" />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              margin: "161px 24px 0px 0px",
            }}
          >
            <img src={picture2} alt="no picture" />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              marginTop: "80px",
            }}
          >
            <img src={picture3} alt="no picture" />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "block", textAlign: "center" }}>
          <Typography
            sx={{
              marginTop: "24px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#848FAC",
            }}
          >
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
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reservation;
