import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({video: {id: { videoId }, snippet}}) => {
  // console.log(videoId, snippet);

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "3px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/GDa8kZLNhJ4`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1E1E1E", height: "130px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 55)}
          </Typography>
        </Link>
        <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle1"
            color="gray"
            display="flex"
            justifyContent="start"
            alignItems="center"
            mt={1}
            textAlign="left"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "16px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
