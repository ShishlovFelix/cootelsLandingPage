import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import picture1 from "../../pictures/twitter.svg";
import picture2 from "../../pictures/instagram-logo.svg";
import picture3 from "../../pictures/facebook.svg";

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
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              margin: "39px auto auto 120px",
            }}
          >
            <Typography sx={{ marginRight: "24px" }}>
              <a
                href=""
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                <img src={picture1} alt="no picture" />
              </a>
            </Typography>
            <Typography sx={{ marginRight: "24px" }}>
              <a
                href=""
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                <img src={picture2} alt="no picture" />
              </a>
            </Typography>
            <Typography>
              <a
                href=""
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                <img src={picture3} alt="no picture" />
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
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Single Room
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Double Room
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Cabin
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Custom Room
              </a>
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
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                See the Steps
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Best Time
              </a>
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
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Our Number
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Our Email
              </a>
            </Typography>
            <Typography
              sx={{
                marginTop: "24px",
              }}
            >
              <a
                href=""
                style={{
                  color: "#D9DBDE",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Our Location
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
