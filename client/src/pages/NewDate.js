import React, {Component} from "react";
import NewDate from "../components/NewDate"


class NewDateIdea extends Component {
    render() {
        return (
          <div className="newDate">
              <div className="container">
                <NewDate />
              </div>
          </div>
        );
    }
}

export default NewDateIdea;