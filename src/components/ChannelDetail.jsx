import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  //!use channelId from the parameter
  const { id } = useParams();
  // console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" width="100%">
      <Box>
        <div
          style={{
            height: "300px",
            zIndex: 10,
            background:
              "linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box sx={{ p: 2, display: "flex" }}>
        <Box sx={{ mr: { sm: "100px" } }} />{" "}
        {/* display: "flex",justifyContent: "center",alignItems: "center",mx: 2,, */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
