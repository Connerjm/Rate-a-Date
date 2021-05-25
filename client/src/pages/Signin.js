import React, {Component} from "react";
import Footer from "../components/Footer";
import { Container} from "../components/Grid";
import Login from "../components/Signin"

class LoginInfo extends Component {
    render() {
        return (
          <Container fluid>
            <Login />
            <Footer />
          </Container>
        );
    }
}

export default LoginInfo;