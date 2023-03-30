import React from "react";
import AppBar from "@mui/material/AppBar";

import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, Menu, Toolbar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

import {
  NavbarLink,
  NavbarParagraph,
  NavbarTitle,
} from "../../../layoutStylesComponents/BaseComponents";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFFFFF", boxShadow: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <NavbarTitle
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Cootels
          </NavbarTitle>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <NavbarTitle href="/">Cootels</NavbarTitle>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarParagraph href="/rooms">Rooms</NavbarParagraph>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarParagraph href="/reservation" >
                  Reservation
                </NavbarParagraph>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavbarParagraph href="/contacs" >
                  Contacs
                </NavbarParagraph>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box
            gap="32px"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <NavbarParagraph href="/rooms">Rooms</NavbarParagraph>
            <NavbarParagraph href="/reservation" textAlign="center">
              Reservation
            </NavbarParagraph>
            <NavbarParagraph href="/contacs" textAlign="center">
              Contacs
            </NavbarParagraph>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <NavbarLink href="/contacs">Get Started</NavbarLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <AppBar
    //   position="static"
    //   sx={{
    //     backgroundColor: "#FFFFFF",
    //     boxShadow: "0",
    //   }}
    // >
    //   <Container
    //     maxWidth="xl"
    //     sx={{ display: "flex", height: "120px", alignItems: "center" }}
    //   >
    //     <Grid container>
    //       <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
    //         <NavbarTitle href="/">Cootels</NavbarTitle>
    //       </Grid>
    //
    //       <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
    //         <MenuItem>
    //           <NavbarParagraph href="/rooms">Rooms</NavbarParagraph>
    //         </MenuItem>
    //         <MenuItem>
    //           <NavbarParagraph href="/reservation">Reservation</NavbarParagraph>
    //         </MenuItem>
    //         <MenuItem>
    //           <NavbarParagraph href="/contacs">Contacs</NavbarParagraph>
    //         </MenuItem>
    //       </Grid>
    //       <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
    //         <NavbarLink href="/contacs">Get Started</NavbarLink>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </AppBar>
  );
};

export default NavBar;
