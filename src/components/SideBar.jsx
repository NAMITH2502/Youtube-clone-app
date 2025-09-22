import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/data";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            style={{
              color: "white",
              background: category.name === selectedCategory && "#FC1503",
            }}
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                fontSize: "1rem"
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
