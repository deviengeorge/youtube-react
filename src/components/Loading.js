import React from "react";
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-bottom: 10px;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    console.log(this.state.loading);
    this.state.loading ? (
      <div
        className='loading-parent'
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          top: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <MoonLoader
          css={override}
          size={150}
          color={"red"}
          loading={this.state.loading}
        />
        <h1>Loading</h1>
      </div>
    )
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000) : null;
  }
}

export default Loading;
