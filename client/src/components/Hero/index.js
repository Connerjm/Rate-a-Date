import React from "react";
import "./hero.css";

function Hero() {
    

    return (
        <section className="heroImg"> 
            <p className="para">Date ideas to turn the spark into a flame</p>
            <form className="searchForm flex">
                <input type="search" className="search" placeholder="Search for ideas" />
                <a href="/" className="go"><i className="fa fa-search" id="sIcon"></i></a>
            </form>
        </section>
    );
}


export default Hero;