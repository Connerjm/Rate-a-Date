import React from "react";
import "./style.css";
import SearchForm from "./searchForm";

const Hero = props => {
    return (
        <section className="heroImg">
        <div className="layout">
        <div className="heart"></div>
            <p className="para">Date ideas to turn the spark into a flame</p>
            </div>
            <SearchForm />
        </section>
    );
}


export default Hero;