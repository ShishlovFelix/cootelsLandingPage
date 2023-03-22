import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const MainTitle = styled(Typography)`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #192252;
`;

export const CardTitle = styled(Typography)`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
`;

export const HowTitle = styled(Typography)`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #192252;
`;

export const MainParagraph = styled(Typography)`
  font-family: "Inter", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #848fac;
`;

export const HowParagraph = styled(Typography)`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #424f7b;
`;

export const MainLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 156px;
  height: 51px;
  background: #0e1734;
  border-radius: 4px;
  font-family: "Inter", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  font-family: "Inter", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #424f7b;
`;
