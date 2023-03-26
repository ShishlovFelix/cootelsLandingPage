import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", height: "120px", alignItems: "center" }}
      >
        <Grid container>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: "flex",
                fontFamily: "Montserrat",
                fontWeight: 800,
                fontSize: "32px",
                lineHeight: "39px",
                letterSpacing: "-0.5px",
                color: "#192252",
                textDecoration: "none",
              }}
            >
              Cootels
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <MenuItem>
              <Typography
                textAlign="center"
                sx={{
                  lineHeight: "19px",
                }}
              >
                <Link
                  href="/rooms"
                  style={{
                    textDecoration: "none",
                    color: "#192252",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  <span>Rooms</span>
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                sx={{
                  lineHeight: "19px",
                }}
              >
                <Link
                  href="/reservation"
                  style={{
                    textDecoration: "none",
                    color: "#192252",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  <span>Reservation</span>
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                textAlign="center"
                sx={{
                  lineHeight: "19px",
                }}
              >
                <Link
                  href="/contacs"
                  style={{
                    textDecoration: "none",
                    color: "#192252",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  <span>Contacs</span>
                </Link>
              </Typography>
            </MenuItem>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "#0E1734",
                color: "#FFFFFF",
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "19px",
                width: "121px",
                height: "47px",
                borderRadius: "4px",
                marginLeft: "110px",
              }}
            >
              Get Started
            </button>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default NavBar;
