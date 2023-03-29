import { Avatar, AvatarProps } from "@mui/material";
import React, { FC } from "react";

export const MainAvatar: FC<AvatarProps> = (props) => {
  return <Avatar {...props} src={`/cootelsLandingPage${props.src}`} />;
};
