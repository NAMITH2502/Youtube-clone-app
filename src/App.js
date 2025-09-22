import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
