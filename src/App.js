import React from "react";
import "./Style.css";
import youtube from "./api/youtube";
import { Container, Row, Col } from "react-bootstrap";
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (serachTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDqyVVy7MvEl4RH4NNbLz4X2NMrq0Zmk4U",
        q: serachTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Container>
        <Row>
          <Col xs='12' md='12'>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Col>
          <Col xs='12' md='8'>
            <VideoDetail video={selectedVideo} />
          </Col>
          <Col xs='12' md='4'>
            <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
          </Col>
        </Row>
      </Container>

      // <Grid justify="center" container spacing={10}>
      //   <Grid item xs={12}>
      //     <Grid container spacing={10}>
      //       <Grid item xs={12}>
      //         <SearchBar onFormSubmit={this.handleSubmit} />
      //       </Grid>
      //       <Grid item xs={8}>
      //         <VideoDetail video={selectedVideo} />
      //       </Grid>
      //       <Grid item xs={4}>
      //         <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
      //       </Grid>
      //     </Grid>
      //   </Grid>
      // </Grid>
    );
  }
}

export default App;
