import React, {Component} from "react";
import TESTING from "../components/TESTING";
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    console.log(this.props.auth.user.username);
    sessionStorage.setItem("user", this.props.auth.user.username);
    window.location.replace("/newdateidea");
  }

    render() {
      const { user } = this.props.auth;
        return (
          <div className="container">
            <div className="card-body player">
            <div className="profile-card-header">
            <div className="flex-row">
                <img className="avatar-lrg" src="/images/randoUser.png" alt="Thumbnail of the assosiated user."/>
                <h1 className="hero-header align-center">{user.username}</h1>
            </div>
                <div className="button-group">
                <a onClick={this.handleClick} className="large filled-default">Add a new Date</a> 
                <a className="large outline-danger" onClick={this.onLogoutClick}>logout</a>
                </div>
            </div>
              <div className="article">
                <h3>My Date Ideas</h3>
                <li className="idea-list list-group-item">
                  <div className="listResults row">
                    <div className="row">
                    <TESTING component="DateList" />
                    </div>
                  </div>
                </li>
              </div>
              <div className="article">
                <h3>Saved Dates</h3>
                <li>
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