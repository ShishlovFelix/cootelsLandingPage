import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import {
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Contacs = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <MainTitle marginTop="125px">Contacs</MainTitle>
          <MainParagraph marginTop="70px">
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
          </MainParagraph>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacs;
