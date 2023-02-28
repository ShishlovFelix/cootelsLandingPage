import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import picture from "../../pictures/cozyPicture.jpg";
import Typography from "@mui/material/Typography";

const Cozy = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", height: "736px" }}>
      <Grid container>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Grid
            item
            sx={{
              margin: "80px 0px 0px 103px",
            }}
          >
            <img src={picture} alt="no picture" />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ display: "block", margin: "0px 0px 0px 32px" }}>
          <Typography
            sx={{
              marginTop: "185px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
              color: "#192252",
            }}
          >
            Cozy and Down to Earth Cootage Hotel in Norway.
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
            Our Cootage Hotel is an intimate hideway concieved for dicerning
            travelers. It faces directly the unique and spectacular panorama of
            the Hallerbos Jungle.
          </Typography>
          <Typography
            sx={{
              marginTop: "16px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#848FAC",
            }}
          >
            Cootels extends along a private, quiet, and beautiful nature. Stay
            away from crowd and enjoy the cozy and beauty with us.
          </Typography>
          <button
            style={{
              marginTop: "32px",
              backgroundColor: "#0E1734",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "19px",
              width: "151px",
              height: "51px",
              borderRadius: "4px",
            }}
          >
            Learn More
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cozy;
