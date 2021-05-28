import React, {Component} from 'react';
import "../../../src/index.css"
import "./style.css";
import User from "../User"

class Signup extends Component {

    render() {
        return (
          <div className="container" style={{ background: "white" }}> 
            <User />
          </div>
        );
    }
}

export default Signup;