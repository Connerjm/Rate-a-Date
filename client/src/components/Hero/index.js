import React from "react";
import "./style.css";

const Hero = props => {
    return (
        <section className="heroImg">
        <div className="layout">
        <div className="heart"></div>
            <p className="para">Date ideas to turn the spark into a flame</p>
            </div>
            <form className="searchForm flex">

                
                <input className="search"
                    value={props.search}
                    placeholder="Search for ideas"
                    type="text"
                    name="searchIdeas"
                    onChange={props.handleInputChange}></input>

                    <a href="/" className="go">
                    {/* <p>Search</p>
                    <div className="heart-search"></div> */}

                    
                    <i className="fa fa-search" id="sIcon"></i>
                    </a>

            </form>
        </section>
    );
}


export default Hero;