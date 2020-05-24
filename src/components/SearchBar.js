import React from "react";

import { Form } from "react-bootstrap";

// import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{ padding: "20px 0" }}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search For A Video...'
            onChange={this.handleChange}
          />
        </Form.Group>
      </Form>

      // <Paper elevation={6} style={{ padding: '25px' }}>
      //   <form onSubmit={this.handleSubmit}>
      //     <TextField fullWidth label="Search..." onChange={this.handleChange} />
      //   </form>
      // </Paper>
    );
  }
}
export default SearchBar;
