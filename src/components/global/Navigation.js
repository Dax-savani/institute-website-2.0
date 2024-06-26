import React, { useState } from "react";
import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/header/logo.png";
import { useMediaQuery } from "@mui/material";

const menuItems = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about" },
  { text: "Activity", path: "/activity" },
  { text: "Course", path: "/course" },
  { text: "Blog", path: "/blog" },
  { text: "Contact Us", path: "/contact" },
];

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        background: "rgba( 255, 255, 255, 0.55 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 5.5px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        padding: "10px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "8px 0",
          }}
        >
          <Box>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Box>
          {isMobile ? (
            <>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List sx={{ width: 250 }}>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={toggleDrawer}>
                      <Link
                        to={item.path}
                        sx={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <List sx={{ display: "flex", gap: 2.5, margin: 0, padding: 0 }}>
              {menuItems.map((item, index) => (
                <ListItem key={index} sx={{ width: "auto", cursor: "pointer" }}>
                  <Link
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      sx={{ "& > span": { fontWeight: "500 !important" } }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
