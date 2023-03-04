import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import picture1 from "../../../pictures/manyPicture1.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import picture2 from "../../../pictures/manyPicture2.jpg";
import picture3 from "../../../pictures/manyPicture3.jpg";

const Contacs = () => {
  return (
    <Container maxWidth="lg" sx={{ display: "block", height: "1176px" }}>
      <Grid container sx={{ display: "block" }}>
        <Grid
          item
          xs={12}
          sx={{ display: "block", textAlign: "center", margin: "auto" }}
        >
          <Typography
            sx={{
              marginTop: "168px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "150%",
              letterSpacing: "-0.01em",
              color: "#192252",
            }}
          >
            Contacs
          </Typography>
          <Typography
            sx={{
              marginTop: "50px",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "150%",
              color: "#848FAC",
            }}
          >
            There is a room for every needs. We have room for individuals until
            family size, we also have a cabin for more private experience Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
            debitis distinctio, doloribus enim exercitationem modi porro quis
            quod recusandae, repellendus sed vel voluptates? A, alias amet animi
            aperiam atque commodi deleniti ducimus ex excepturi exercitationem
            itaque laboriosam minima modi, nostrum nulla obcaecati odit possimus
            quos sint sunt suscipit tenetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquam animi asperiores placeat quam
            veritatis. Accusamus aut debitis dolorem laudantium maiores
            necessitatibus odio quas recusandae reiciendis, repellat repudiandae
            temporibus voluptatem voluptatum!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacs;
