import React, { Component } from "react";
import MainCard from "../components/MainCard";
import Hero from "../components/Hero";

class Home extends Component {
 
  
  render() {
    return (
        <section className="container" id="mainCard">
          <Hero />
          <MainCard />
        </section>
    );
  }
  
}


export default Home;
