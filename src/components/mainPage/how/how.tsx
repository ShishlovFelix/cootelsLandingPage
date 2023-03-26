import React from "react";
import { Grid, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CardLink,
  HowParagraph,
  HowTitle,
  MainLink,
  MainParagraph,
} from "../../../layoutStylesComponents/BaseComponents";

const How = () => {
  return (
    <Container maxWidth="lg">
      <Grid container flexDirection="row" alignItems="center">
        <Stack
          flexDirection="column"
          item
          gap="16px"
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <CardLink to="/contacs">Start your journey!</CardLink>
          <HowTitle>How to Get My Room?</HowTitle>
          <MainParagraph>
            You can contact us by phone or email us. Easily tap the contact
            button below and it will take you to our contact point
          </MainParagraph>
          <Stack
            flexDirection="row"
            sx={{ alignItems: "center", margin: { xs: "auto", md: "0" } }}
          >
            <MainLink to="/contacs">Contact us</MainLink>
            <CardLink sx={{ marginLeft: "15px" }} to="/rooms">
              Explore more room
            </CardLink>
          </Stack>
        </Stack>
        <Stack
          flexDirection="column"
          rowGap="50px"
          item
          sx={{
            filter: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.07))",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Accordion
            sx={{
              marginTop: "80px",
              "&:before": {
                all: "unset",
              },
            }}
            elevation={0}
          >
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
            >
              <HowParagraph>1. Choose a room and date</HowParagraph>
            </AccordionSummary>
            <AccordionDetails>
              <MainParagraph>
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </MainParagraph>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginTop: "24px",
              "&:before": {
                all: "unset",
              },
            }}
            elevation={0}
          >
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
            >
              <HowParagraph>2. Check for room availability</HowParagraph>
            </AccordionSummary>
            <AccordionDetails>
              <MainParagraph>
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </MainParagraph>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              marginTop: "24px",
              "&:before": {
                all: "unset",
              },
            }}
            elevation={0}
          >
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
            >
              <HowParagraph>3. Enjoy your room</HowParagraph>
            </AccordionSummary>
            <AccordionDetails>
              <MainParagraph>
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </MainParagraph>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Grid>
    </Container>
  );
};

export default How;
