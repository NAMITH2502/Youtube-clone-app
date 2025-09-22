import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";


const Videos = ({ videos, direction }) => {

  if (!videos?.length) return <Loader />;
  // console.log(videos)
  
  return (
    <Stack
      direction={ direction || "row" }
      display="flex"
      flexWrap="wrap"
      // gridTemplateColumns="repeat(4, minmax(300px, 400px))"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
