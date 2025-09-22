import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channelDetail, marginTop }) => {
  // console.log(channelDetail);

  return (
    <Box
      sx={{
        margin: "auto",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        borderRadius: "20px",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {channelDetail?.snippet?.title}{" "}
            <CheckCircleIcon
              sx={{ color: "gray", ml: "5px", fontSize: "18px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ color: "gray", fontSize: "15px", fontWeight: 500 }}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
