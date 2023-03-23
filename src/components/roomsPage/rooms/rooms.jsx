import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

import picture1 from "../../../pictures/manyPicture1.jpg";
import picture2 from "../../../pictures/manyPicture2.jpg";
import picture3 from "../../../pictures/manyPicture3.jpg";
import {
  MainParagraph,
  MainTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const Rooms = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <MainTitle marginTop="125px">Single Room</MainTitle>
          <img style={{ marginTop: "80px" }} src={picture1} alt="no picture" />
          <MainParagraph marginTop="70px">
            There is a room for every needs. We have room for individuals until
            family size, we also have a cabin for more private experience Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Alias amet autem
            beatae blanditiis consequatur debitis earum eius eligendi harum in
            laboriosam maiores non provident, repellendus sit tempora veniam.
            Aspernatur assumenda autem blanditiis ducimus enim exercitationem,
            facilis incidunt laborum magni molestiae odit officia ratione sequi
            soluta sunt totam ullam voluptate voluptatem.
          </MainParagraph>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <MainTitle marginTop="125px">Double Room</MainTitle>
          <img style={{ marginTop: "80px" }} src={picture2} alt="no picture" />
          <MainParagraph marginTop="70px">
            Best for couple, seek happiness in intimacy without worry of being
            disturbed. Feel the whole world just for you two Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias architecto, atque
            cupiditate deserunt, enim esse est et eveniet magnam maxime omnis
            placeat recusandae similique velit voluptate. Deserunt doloremque
            eligendi, impedit necessitatibus nemo nostrum quam quibusdam quidem
            repellendus repudiandae. Alias aperiam cum cumque deserunt dolor
            dolores eum inventore neque quasi ut!
          </MainParagraph>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <MainTitle marginTop="125px">Cootage</MainTitle>
          <img style={{ marginTop: "80px" }} src={picture3} alt="no picture" />
          <MainParagraph margin="70px auto">
            Best for family or group. One cootage can fit up to 5 people. Made
            stronger bond with your family or friends Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Culpa in, sequi. Dolor iste
            necessitatibus nesciunt quaerat quas rem similique! Accusantium
            adipisci, animi asperiores assumenda blanditiis ducimus ea
            exercitationem explicabo fugiat illo ipsum itaque, magnam non
            pariatur provident quaerat quas quisquam quod rem reprehenderit
            sapiente sed sint sit ullam, voluptatem voluptatum?
          </MainParagraph>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rooms;
