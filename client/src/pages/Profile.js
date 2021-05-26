import React, {Component} from "react";
import Footer from "../components/Footer";
import User from "../components/Profile";
import { Container} from "../components/Grid";


class SignupInfo extends Component {
    render() {
        return (
          <Container fluid>
            <User />
            <Footer />
          </Container>
        );
    }
}

export default SignupInfo;