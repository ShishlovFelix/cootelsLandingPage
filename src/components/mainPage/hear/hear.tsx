import React from "react";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
const picture = "/pictures/hearPicture.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@mui/material/Typography";
import { MainAvatar } from "../../../layoutStylesComponents/MainAvatar";
import {
  HearParagraph,
  HowTitle,
  MainParagraph,
} from "../../../layoutStylesComponents/BaseComponents";

const Hear = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: { xs: "none", md: "block" }, height: "627px" }}
      >
        <Carousel showStatus={false} showThumbs={false} showArrows={true}>
          <div>
            <HowTitle
              sx={{
                marginTop: "80px",
              }}
            >
              Hear From Our Happy Customers
            </HowTitle>
            <MainAvatar
              alt="avatar"
              src={picture}
              sx={{ width: 120, height: 120, margin: "62px auto 0px auto" }}
            />
            <MainParagraph
              sx={{
                marginTop: "44px",
              }}
            >
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </MainParagraph>
            <HearParagraph
              sx={{
                margin: "40px 0px 116px 0px",
              }}
            >
              Kirana Dunham
            </HearParagraph>
          </div>
          <div>
            <HowTitle
              sx={{
                marginTop: "80px",
              }}
            >
              Hear From Our Happy Customers
            </HowTitle>
            <MainAvatar
              alt="avatar"
              src={picture}
              sx={{ width: 120, height: 120, margin: "62px auto 0px auto" }}
            />
            <MainParagraph
              sx={{
                marginTop: "44px",
              }}
            >
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </MainParagraph>
            <HearParagraph
              sx={{
                margin: "40px 0px 116px 0px",
              }}
            >
              Kirana Dunham
            </HearParagraph>
          </div>
          <div>
            <HowTitle
              sx={{
                marginTop: "80px",
              }}
            >
              Hear From Our Happy Customers
            </HowTitle>
            <MainAvatar
              alt="avatar"
              src={picture}
              sx={{ width: 120, height: 120, margin: "62px auto 0px auto" }}
            />
            <MainParagraph
              sx={{
                marginTop: "44px",
              }}
            >
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </MainParagraph>
            <HearParagraph
              sx={{
                margin: "40px 0px 116px 0px",
              }}
            >
              Kirana Dunham
            </HearParagraph>
          </div>
          <div>
            <HowTitle
              sx={{
                marginTop: "80px",
              }}
            >
              Hear From Our Happy Customers
            </HowTitle>
            <MainAvatar
              alt="avatar"
              src={picture}
              sx={{ width: 120, height: 120, margin: "62px auto 0px auto" }}
            />
            <MainParagraph
              sx={{
                marginTop: "44px",
              }}
            >
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </MainParagraph>
            <HearParagraph
              sx={{
                margin: "40px 0px 116px 0px",
              }}
            >
              Kirana Dunham
            </HearParagraph>
          </div>
          <div>
            <HowTitle
              sx={{
                marginTop: "80px",
              }}
            >
              Hear From Our Happy Customers
            </HowTitle>
            <MainAvatar
              alt="avatar"
              src={picture}
              sx={{ width: 120, height: 120, margin: "62px auto 0px auto" }}
            />
            <MainParagraph
              sx={{
                marginTop: "44px",
              }}
            >
              “Great service, great food, great people. The scenery is also
              beautiful, you can do so much activity even with your famility.
              Worth every penny! you should come and see for your self. 5 out of
              5! the waffle is great!”
            </MainParagraph>
            <HearParagraph
              sx={{
                margin: "40px 0px 116px 0px",
              }}
            >
              Kirana Dunham
            </HearParagraph>
          </div>
        </Carousel>
      </Container>
    </>
  );
};

export default Hear;
