import React, {Component} from "react";
import TESTING from "../components/TESTING";


class Profile extends Component {
    render() {
        return (
          <div className="container">
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

export default Profile;