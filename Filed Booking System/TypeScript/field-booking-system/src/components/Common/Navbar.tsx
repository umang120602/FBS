import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  InputBase,
  IconButton,
  Stack,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import logo from "../../assets/FBS_Logo.png";

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            {/* Logo */}
            <img src={logo} alt="Logo" style={{ height: 70 }} />

            {/* Placeholder for Equal Spacing */}
            <div style={{ flex: 1 }} />

            {/* Tabs Positioned Right */}
            <Tabs
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                color: "black",
              }}
            >
              <Tab label="Fields" />
              <Tab label="Blog" />
              <Tab label="ContactUs" />
              <Tab label="Login/SignUp" />
            </Tabs>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
