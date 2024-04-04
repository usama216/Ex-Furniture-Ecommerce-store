import React, { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo Ok.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box className="navbar-container">
        <Box
          className="navbar-items"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              "@media(max-width:480px)": {
                display: "none",
              },
            }}
          >
            <NavLink to="/" style={{ cursor: "pointer" }}>
              <img src={Logo} alt="Logo" width={"50rem"} />
            </NavLink>
          </Box>
          <Box
            sx={{
              "@media(min-width:481px)": {
                display: "none",
              },
            }}
          >
            <NavLink to="/" style={{ cursor: "pointer" }}>
              <img src={Logo} alt="Logo" width={"30rem"} />
            </NavLink>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/catogries"
              className="nav-link"
              activeClassName="active"
            >
Catogries
            </NavLink>
            <NavLink
              to="/contactus"
              className="nav-link"
              activeClassName="active"
            >
              Contact us
            </NavLink>
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="active"
            >
              About us
            </NavLink>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#94603b",
                borderRadius: "25px",
                color: "white",
                "&:hover": {
      backgroundColor: "#94603b", // Change background color to red on hover
    },
              }}
            >
              <NavLink
                className="custom-navlink"
                to="/register"
                style={{
                  textTransform: "none",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
               Become a seller
              </NavLink>
            </Button>
          </Box>

          {/* Mobile Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CloseIcon onClick={handleDrawerClose} />
            </Box>
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                paddingLeft: "10%",
                gap: "1.2rem",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#EC4908",
                  fontSize: "1rem",

                  borderRadius: "3px",
                  boxShadow: "1px 2px 2px grey",
                  width: "90%",
                  padding: "1rem 0rem 1rem 1rem",
                }}
                to="/"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#EC4908",
                  fontSize: "1rem",
                  borderRadius: "3px",
                  boxShadow: "1px 2px 2px grey",
                  width: "90%",
                  padding: "1rem 0rem 1rem 1rem",
                }}
                to="/catogries"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                Catogries
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#EC4908",
                  fontSize: "1rem",
                  borderRadius: "3px",
                  boxShadow: "1px 2px 2px grey",
                  width: "90%",
                  padding: "1rem 0rem 1rem 1rem",
                }}
                to="/aboutus"
                className="nav-link"
                onClick={handleDrawerClose}
              >
                About us
              </NavLink>
              <NavLink
                to="/contactus"
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "#EC4908",
                  fontSize: "1rem",
                  borderRadius: "3px",
                  boxShadow: "1px 2px 2px grey",
                  width: "90%",
                  padding: "1rem 0rem 1rem 1rem",
                }}
                onClick={handleDrawerClose}
              >
                Contact Us
              </NavLink>


              <NavLink
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "#EC4908",
                  fontSize: "1rem",
                  borderRadius: "3px",
                  boxShadow: "1px 2px 2px grey",
                  width: "90%",
                  padding: "1rem 0rem 1rem 1rem",
                }}
                onClick={handleDrawerClose}
              >
               Become a seller
              </NavLink>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
