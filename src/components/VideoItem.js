import React from "react";

import { Card } from "react-bootstrap";

// import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // <Grid item xs={12}>
    //     <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'poniter' }} onClick={() => onVideoSelect(video)}>
    //         <img style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
    //         <Typography varient="subtitle1"><b>{video.snippet.title}</b></Typography>
    //     </Paper>
    // </Grid>

    <Card
      style={{
        width: "32rem",
        display: "grid",
        alignItems: "center",
        cursor: "poniter",
        marginBottom: "30px",
        overflow: "hidden",
      }}
      xs='12'
      onClick={() => onVideoSelect(video)}
    >
      <Card.Img
        variant='left'
        src={video.snippet.thumbnails.medium.url}
        alt='Thumbnail'
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Card.Title>
          <b>{video.snippet.title}</b>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default VideoItem;
