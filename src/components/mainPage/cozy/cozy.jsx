import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import picture from "../../../pictures/cozyPicture.jpg";
import Typography from "@mui/material/Typography";

const Cozy = () => {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", height: "736px" }}>
      <Grid container sx={{ display: { xs: "block", md: "flex" } }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            marginTop: { xs: "400px", md: "0px" },
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "block",
            margin: "0px 0px 0px 32px",
            textAlign: { xs: "center", md: "start" },
          }}
        >
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
      {/*<Grid*/}
      {/*  container*/}
      {/*  sx={{ display: { xs: "block", md: "none" }, marginTop: "450px" }}*/}
      {/*>*/}
      {/*  <Grid*/}
      {/*    item*/}
      {/*    xs={12}*/}
      {/*    sx={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "center",*/}
      {/*      alignItems: "center",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Grid*/}
      {/*      item*/}
      {/*      sx={{*/}
      {/*        margin: "80px 0px 0px 103px",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <img src={picture} alt="no picture" />*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*  <Grid*/}
      {/*    item*/}
      {/*    xs={12}*/}
      {/*    sx={{*/}
      {/*      display: "block",*/}
      {/*      margin: "0px 0px 0px 32px",*/}
      {/*      textAlign: "center",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <Typography*/}
      {/*      sx={{*/}
      {/*        marginTop: "85px",*/}
      {/*        fontFamily: "Montserrat",*/}
      {/*        fontWeight: 600,*/}
      {/*        fontSize: "36px",*/}
      {/*        lineHeight: "150%",*/}
      {/*        letterSpacing: "-0.01em",*/}
      {/*        color: "#192252",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Cozy and Down to Earth Cootage Hotel in Norway.*/}
      {/*    </Typography>*/}
      {/*    <Typography*/}
      {/*      sx={{*/}
      {/*        marginTop: "24px",*/}
      {/*        fontFamily: "Inter",*/}
      {/*        fontWeight: 400,*/}
      {/*        fontSize: "18px",*/}
      {/*        lineHeight: "150%",*/}
      {/*        color: "#848FAC",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Our Cootage Hotel is an intimate hideway concieved for dicerning*/}
      {/*      travelers. It faces directly the unique and spectacular panorama of*/}
      {/*      the Hallerbos Jungle.*/}
      {/*    </Typography>*/}
      {/*    <Typography*/}
      {/*      sx={{*/}
      {/*        marginTop: "16px",*/}
      {/*        fontFamily: "Inter",*/}
      {/*        fontWeight: 400,*/}
      {/*        fontSize: "18px",*/}
      {/*        lineHeight: "150%",*/}
      {/*        color: "#848FAC",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Cootels extends along a private, quiet, and beautiful nature. Stay*/}
      {/*      away from crowd and enjoy the cozy and beauty with us.*/}
      {/*    </Typography>*/}
      {/*    <button*/}
      {/*      style={{*/}
      {/*        marginTop: "32px",*/}
      {/*        backgroundColor: "#0E1734",*/}
      {/*        color: "#FFFFFF",*/}
      {/*        fontFamily: "Inter",*/}
      {/*        fontSize: "16px",*/}
      {/*        lineHeight: "19px",*/}
      {/*        width: "151px",*/}
      {/*        height: "51px",*/}
      {/*        borderRadius: "4px",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Learn More*/}
      {/*    </button>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Container>
  );
};

export default Cozy;
