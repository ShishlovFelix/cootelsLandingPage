import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const How = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", justifyContent: "space-between", height: "596px" }}
    >
      <Grid container>
        <Grid item xs={6} sx={{ display: "block" }}>
          <Typography
            sx={{ display: "flex", alignItems: "end", marginTop: "162px" }}
          >
            <a
              style={{
                color: "#424F7B",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                border: "0",
              }}
            >
              Start your journey!
            </a>
          </Typography>
          <Typography
            sx={{
              marginTop: "12px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "150%",
              color: "#192252",
            }}
          >
            How to Get My Room?
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
            You can contact us by phone or email us. Easily tap the contact
            button below and it will take you to our contact point
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", marginTop: "32px" }}
          >
            <button
              style={{
                backgroundColor: "#0E1734",
                color: "#FFFFFF",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19px",
                width: "148px",
                height: "51px",
                borderRadius: "4px",
              }}
            >
              Contact us
            </button>
            <a
              style={{
                margin: "0px 0px 0px 24px",
                color: "#424F7B",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "150%",
                border: "0",
              }}
            >
              Explore more room
            </a>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "block",
            filter: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.07))",
          }}
        >
          <Accordion sx={{ marginTop: "80px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FF620A",
                    backgroundColor: "#FFECE2",
                    borderRadius: "99px",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ height: "100px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#424F7B",
                }}
              >
                1. Choose a room and date
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "150%",
                  color: "#848FAC",
                }}
              >
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "24px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FF620A",
                    backgroundColor: "#FFECE2",
                    borderRadius: "99px",
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ height: "100px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#424F7B",
                }}
              >
                2. Check for room availability
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "150%",
                  color: "#848FAC",
                }}
              >
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginTop: "24px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FF620A",
                    backgroundColor: "#FFECE2",
                    borderRadius: "99px",
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ height: "100px" }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#424F7B",
                }}
              >
                3. Enjoy your room
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "150%",
                  color: "#848FAC",
                }}
              >
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

export default How;
