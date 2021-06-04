import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import "./nav.css";

class NavBar extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        }


    render() {
        const { user } = this.props.auth;
        console.log(this.props.auth.user.username)
        let currentPage = window.location.pathname;
        console.log(currentPage)
        if(currentPage === "/") {
            let currentPage = "home"
            console.log(currentPage)
        } 
        if(currentPage === "home") {
            
        }
        return (
           
            <header className="container no-bg">
                {!currentPage
                ?
                <div></div>
                :
                <div><a href="/" id="home" className="btn round" style={{ padding: "0px" }}><i className="fas fa-home" style={{ fontSize: "32px" }}></i></a></div>}
                
                <img className="logo" src="https://raw.githubusercontent.com/FAC-73/zen-garden/c97a876ba046f32aab6e563ee158e349f3336006/spark_logo.svg" alt="logo" />
                
                {!this.props.auth.user.username
                ?
                <div id="pages">
                    <a href="/login" id="login">Login</a>
                    <a href="/register" id="signup">Signup</a>
                </div>
                :
                <div id="pages">
                    <a href="/Profile" id="profile">Profile</a>
                </div>
            }
            </header>
        );
    }
}


NavBar.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(NavBar);