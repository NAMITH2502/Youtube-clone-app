import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromAPI";
import { Box, Typography, Stack } from "@mui/material";
import Videos from "./Videos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from 'react-player';
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  console.log(videoDetail);
  const { snippet: { title, channelId, channelTitle },statistics: { likeCount, viewCount }} = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer className="react-player" src={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography variant="h5" color="#fff" p={2} fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              // sx={{ color: "fff" }}
              px={2}
              py={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  display="flex"
                  justifyContent="center"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "18px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
                sx={{ color: "#fff" }}
              >
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
