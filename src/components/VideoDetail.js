import React from "react";
import { Jumbotron } from "react-bootstrap";
import ReactPlayer from "react-player";

// import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <div
        className='text-center text-capitalize'
        style={{ fontSize: "1.3em" }}
      >
        please type word in search bar...
      </div>
    );

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Jumbotron style={{ padding: "1rem 1rem" }}>
        {/* <iframe frameBorder="0" height="80%" width="100%" title="Video Player" src={videoSrc}></iframe> */}
        <ReactPlayer
          url={videoSrc}
          playing
          width='100%'
          height='500px'
          controls='true'
        />
        <div style={{ paddingTop: "10px", color: "black" }}>
          <h4 style={{ fontSize: "1.3em", textAlign: "center" }}>
            {video.snippet.title} - {video.snippet.channelTitle}
          </h4>
          <h5
            style={{ fontSize: "1em", color: "#2c2c2c", textAlign: "center" }}
          >
            {video.snippet.channelTitle}
          </h5>
          <h5 style={{ fontSize: "1em", color: "#808080" }}>
            {video.snippet.description}
          </h5>
        </div>
      </Jumbotron>

      {/* <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameborder="0" height="100%" width="100%" title="Video Player" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper> */}
    </React.Fragment>
  );
};

export default VideoDetail;
