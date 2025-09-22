import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <Paper
      sx={{
        borderRadius: 20,
        pl: 2,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
        
      }}
      component="form"
      onSubmit={onHandleSubmit}
    >
      <input
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
