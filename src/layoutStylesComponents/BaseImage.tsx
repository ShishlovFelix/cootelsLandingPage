import { Box, styled } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
import Typography from "@mui/material/Typography";

export const BoxImageWrapper = styled(Box)`
  width: 100%;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const BaseImage: FC<ImageProps> = (props) => {
  return (
    <BoxImageWrapper>
      <Image {...props} className={"image"} layout="fill" />
    </BoxImageWrapper>
  );
};
