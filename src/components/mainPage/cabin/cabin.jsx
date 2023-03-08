import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import picture1 from "../../../pictures/cabinPicture1.jpg";
import picture2 from "../../../pictures/cabinPicture2.jpg";

const Cabin = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "block", height: "960px" }}>
      <Grid container sx={{ display: "block" }}>
        <Grid item xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid xs={7}>
            <Typography
              sx={{
                marginTop: "193px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "150%",
                letterSpacing: "-0.01em",
                color: "#192252",
              }}
            >
              Cabin Activities
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
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </Typography>
          </Grid>
          <Grid
            xs={6}
            sx={{
              marginTop: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={picture1} alt="no picture" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "none", md: "flex" }, marginTop: "32px" }}
        >
          <Grid xs={5}>
            <img src={picture2} alt="no picture" />
          </Grid>
          <Grid xs={6} sx={{ margin: "0px 0px 0px 15px" }}>
            <Typography
              sx={{
                marginTop: "115px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "150%",
                letterSpacing: "-0.01em",
                color: "#192252",
              }}
            >
              100% Organic Food
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
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "block", md: "none" },
            marginTop: "900px",
            textAlign: "center",
          }}
        >
          <Grid
            xs={12}
            sx={{
              marginTop: "193px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={picture1} alt="no picture" />
          </Grid>
          <Grid xs={12}>
            <Typography
              sx={{
                marginTop: "80px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "150%",
                letterSpacing: "-0.01em",
                color: "#192252",
              }}
            >
              Cabin Activities
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
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "block", md: "none" },
            marginTop: "90px",
            textAlign: "center",
          }}
        >
          <Grid xs={12}>
            <img src={picture2} alt="no picture" />
          </Grid>
          <Grid xs={12} sx={{ margin: "0px 0px 0px 15px" }}>
            <Typography
              sx={{
                marginTop: "80px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "150%",
                letterSpacing: "-0.01em",
                color: "#192252",
              }}
            >
              100% Organic Food
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
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cabin;
