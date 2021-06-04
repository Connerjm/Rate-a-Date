import React, { Component } from "react";
import "./nav.css";

class NavBar extends Component {

    render() {
        return (
            <header className="header">
                <div><a href="/" className="btn round" style={{ padding: "0px" }}><i className="fas fa-home" style={{ fontSize: "32px" }}></i></a></div>
                <img className="logo" src="https://raw.githubusercontent.com/FAC-73/zen-garden/c97a876ba046f32aab6e563ee158e349f3336006/spark_logo.svg" alt="logo" />
                <div id="pages">
                    <a href="/login" id="login">Login</a>
                    <a href="/register" id="signup">Signup</a>
                </div>

                {/* These will be on the other pages just added to see what we need
                <a href="/" id="profile">Profile</a>
                <a href="/" id="signout">Sign Out</a>
             */}

            </header>
        );
    }
}


export default NavBar;