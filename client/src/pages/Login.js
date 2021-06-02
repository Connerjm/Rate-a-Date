import React, {Component} from "react";
import Login from "../components/auth/Login"


class Signin extends Component {
    render() {
        return (
          <div className="container">
              <Login />
          </div>
        );
    }
}

export default Signin;