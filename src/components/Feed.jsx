import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "2px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#999",
            mt: 1.5,
            fontWeight: 600,
            display: "fixed",
            bottom: 0,
          }}
          className="copyright"
        >
          Copyright © {new Date().getFullYear()} JSM Media
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2, ml: { lg: 3 } }}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold" }}
          mb={2}
          variant="h4"
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
