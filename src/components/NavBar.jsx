import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

//import image logo
import { logo } from "../utils/data";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        justifyContent: "space-between",
        background: "#000",
        zIndex: "100",
        position: "sticky",
        top: 0,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <p
          style={{
            color: "#fff",
            marginLeft: "10px",
            fontFamily: "Roboto",
            fontSize: "1.5rem",
          }}
        >
          YouTube&trade;
        </p>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
