import React, { Component } from "react";
import MainCard from "../components/MainCard";
import { Container } from "../components/Grid";


class Home extends Component {
    state = {
      search: "",
      error: "",
      message: ""
    };

  //function to take value of what enter in the search bar
  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };
  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
  }
  
  render() {
    return (
      <Container fluid>
        <MainCard />
      </Container>
    );
  }
  
}


export default Home;
