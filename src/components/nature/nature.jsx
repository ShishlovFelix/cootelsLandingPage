import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import picture1 from "../../pictures/naturePicture1.jpg";
import picture2 from "../../pictures/naturePicture2.jpg";
import picture3 from "../../pictures/naturePicture3.jpg";

const Nature = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "space-between", height: "845px" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} sx={{ display: "block" }}>
          <Typography
            sx={{
              marginTop: "215px",
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
            One place to release all the stress, bring back happines, and get
            back to nature. We provide the best room and nature for you. Come
            visit us anytime you want.
          </Typography>
          <button
            style={{
              marginTop: "32px",
              backgroundColor: "#0E1734",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "19px",
              width: "156px",
              height: "51px",
              borderRadius: "4px",
            }}
          >
            Reservation
          </button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "space-around",
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
      </Grid>
    </Container>
  );
};

export default Nature;
