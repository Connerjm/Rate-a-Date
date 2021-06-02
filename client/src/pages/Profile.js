import React, {Component} from "react";
import TESTING from "../components/TESTING";


class Profile extends Component {
    render() {
        return (
          <div className="container">
            <div className="card-body player">
              <div className="user">
                <img src="/images/randoUser.png" alt="Thumbnail of the assosiated user." />
                <h2>Victor</h2>
                <a href="/newdateidea" className="btn filled-default">Add a new Date</a>
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