import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "444px",
        backgroundColor: "#0B265A",
      }}
    >
      <Grid container>
        <Grid item xs={6} sx={{ display: "block" }}>
          <Grid item xs={4} sx={{ marginLeft: "120px" }}>
            <Typography
              sx={{
                marginTop: "120px",
              }}
            >
              <a
                href=""
                style={{
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
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "13px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
              >
                Your Best Private
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "13px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
              >
                Hideway From Crowd.
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "13px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
              >
                Back to Nature.
              </a>
            </Typography>
          </Grid>
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
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Single Room
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Double Room
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Cabin
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Custom Room
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
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              See the Steps
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Best Time
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
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Our Number
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Our Email
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                color: "#D9DBDE",
              }}
            >
              Our Location
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
