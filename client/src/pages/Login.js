import React, {Component} from "react";
import { Container} from "../components/Grid";
import Login from "../components/auth/Login"


class Signin extends Component {
    render() {
        return (
          <div>
              <Login />
          </div>
        );
    }
}

export default Signin;