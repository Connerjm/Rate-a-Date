import React, {Component} from "react";
import { Container} from "../components/Grid";
import Register from "../components/auth/Register"


class Signup extends Component {
    render() {
        return (
          <div>
              <Register />
          </div>
        );
    }
}

export default Signup;