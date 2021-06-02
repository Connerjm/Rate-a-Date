//Imports.
import React, { Component} from "react";
import TESTING from "./TESTING"
import PropTypes from "prop-types";
//import DateListItem from "./DateListItem"
import "../index.css"
import {Row} from "./Grid"

import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

//Component function. Set up just for to see the actual will be similar
class UserProfile extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render () {
    return ( 
        <div className="card-body player">
            <div className="profile-card-header">
            <div className="flex-row">
                <img className="avatar-lrg" src="/images/randoUser.png" alt="Thumbnail of the assosiated user."/>
                <h1 className="hero-header align-center">Victor Andersen</h1>
            </div>
                <div className="button-group">
                <a href="/newdateidea" className="large filled-default">Add a new Date</a> 
                <button className="large outline-danger" onClick={this.onLogoutClick}>logout</button>
                </div>
            </div>
            <div className="article">
                <h3>My Date Ideas</h3>
                    <li className="idea-list list-group-item">
                        <Row className="listResults row">
                            <TESTING component="DateListItem" />
                        </Row>
                    </li>
             </div>
        </div>
    )
    }
}
UserProfile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
    )(UserProfile);
