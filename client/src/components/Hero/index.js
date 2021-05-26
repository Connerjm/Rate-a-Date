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
                    onChange={props.handleInputChange}
                    id={props.id}
                />

                <button className="go" onClick={props.handleFormSubmit}><i className="fa fa-search" id="sIcon"></i></button>
            </form>
        </section>
    );
}


export default Hero;