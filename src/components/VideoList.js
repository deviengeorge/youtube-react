import React from "react";

import { Row, Col } from "react-bootstrap";

// import { Grid } from '@material-ui/core'

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideo = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <Row>{listOfVideo}</Row>

    // <Grid spacing={10}>
    //     {listOfVideo}
    // </Grid>
  );
};

export default VideoList;
