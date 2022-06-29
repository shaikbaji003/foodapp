import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import React from "react";
import "./Nav.css";

const Nav: React.FC<{}> = () => {
  return (
    <>
      <CssBaseline>
        <AppBar
          position="relative"
          sx={{ background: "white", height: "50px" }}
        >
          <Toolbar className="toolbar">
            <Tabs
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              component="div"
            >
              <Tab label="ABOUT" />
              <Tab label="COOKBOOK" />
              <Tab label="SHOP" />
              <Tab label="SUBSCRIBE" />
              <Tab label="SAVED" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Typography>
          <img
            src="https://cookieandkate.com/images/2017/04/header-google.jpg"
            alt="img"
            className="image"
            style={{ width: "50%", height: "250px", padding: "20px" }}
          />
        </Typography>
      </CssBaseline>
    </>
  );
};

export default Nav;
