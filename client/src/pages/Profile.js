import React, {Component} from "react";
import TESTING from "../components/TESTING";
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Avatars from "../components/Avatars";

class Profile extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    }
    
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  handleClick = e => {
    e.preventDefault();
    sessionStorage.setItem("user", this.props.auth.user.username);
    window.location.replace("/newdateidea");
  }


    render() {
      const { user } = this.props.auth;
        return (
          <div className="container">
            <div>
            <div className="profile-card-header">
            <div className="flex-row">
                <Avatars className="avatar-lrg fade-in one" component="Rikio" />
                <h1 className="hero-header align-center">{user.username}</h1>
            </div>
                <div className="button-group fade-in one">
                <a onClick={this.handleClick} className="large filled-default">Add a new Date</a> 
                <a className="large outline-danger" onClick={this.onLogoutClick}>logout</a>
                </div>
            </div>
              <div className="details-section-spacing">
                <h3>My Date Ideas</h3>
                <li className="idea-list list-group-item">
                  <div>
                    <div>
                    <TESTING component="DateList" />
                    </div>
                  </div>
                </li>
              </div>
              <div className="details-section-spacing">
                <h3>Saved Dates</h3>
                <li className="list-group-item">
                  <TESTING component="DateList" />
                </li>
              </div>
            </div>
          </div>
        );
    }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);