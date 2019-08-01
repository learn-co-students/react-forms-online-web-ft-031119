// Code ControlledInput Component Here
import React, { Component } from "react";

export default class ControlledInput extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.value);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
