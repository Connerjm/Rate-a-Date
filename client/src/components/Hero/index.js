import React from "react";
import "./style.css";
import SearchForm from "./searchForm";

const Hero = props => {
    return (
        <section className="heroImg fade-in one">
        <div className="layout">
            <p className="para span">Date ideas to turn the spark into a flame</p>
            </div>
            <SearchForm />
        </section>
    );
}


export default Hero;