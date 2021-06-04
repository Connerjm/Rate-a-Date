import React, { Component } from "react";
import MainCard from "../components/MainCard";
import Hero from "../components/Hero";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ""
    };
    this.onClick = this.handleClick.bind(this);
}


handleClick = e => {
  e.preventDefault();
  this.setState({ name: e.target.name })
  console.log(this.state);
}
  
  render() {
    return (
        <section className="container" id="mainCard">
          <Hero />
          <MainCard 
            onClick={this.handleClick}/>
        </section>
    );
  }
  
}


export default Home;
