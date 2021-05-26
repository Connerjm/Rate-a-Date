import React, {Component} from "react";
import { Container} from "../components/Grid";
import Login from "../components/Signin"

class LoginInfo extends Component {
    render() {
        return (
          <Container fluid>
            <Login />
          </Container>
        );
    }
}

export default LoginInfo;