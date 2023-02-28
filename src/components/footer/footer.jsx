import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "444px",
        backgroundColor: "#0B265A",
      }}
    >
      <Grid container>
        <Grid item xs={6} sx={{ display: "block" }}>
          <Typography
            component="a"
            href="/"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "39px",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Cootels
          </Typography>
          <Typography
            component="a"
            href="/"
            sx={{
              color: "#D9DBDE",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              textDecoration: "none",
            }}
          >
            Your Best Private
          </Typography>
          <Typography
            component="a"
            href="/"
            sx={{
              color: "#D9DBDE",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              textDecoration: "none",
            }}
          >
            Hideway From Crowd.
          </Typography>
          <Typography
            component="a"
            href="/"
            sx={{
              color: "#D9DBDE",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              textDecoration: "none",
            }}
          >
            Back to Nature.
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", marginTop: "120px" }}>
          <Grid xs={4} sx={{ display: "block" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              Rooms
            </Typography>
          </Grid>
          <Grid xs={5} sx={{ display: "block" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              Reservation
            </Typography>
          </Grid>
          <Grid xs={3} sx={{ display: "block" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              Contact
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
