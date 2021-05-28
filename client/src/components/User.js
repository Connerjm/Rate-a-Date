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
            <div>
                <img src="/images/randoUser.png" alt="Thumbnail of the assosiated user."/>
                <h2>Victor</h2>
                <a href="/newdateidea" className="btn filled-default">Add a new Date</a> 
                <button onClick={this.onLogoutClick}>logout</button>
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
