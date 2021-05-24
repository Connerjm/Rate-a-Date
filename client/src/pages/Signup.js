import React, {Component} from "react";
import Footer from "../components/Footer";
import { Container} from "../components/Grid";
import Signup from "../components/Signup"

class SignupInfo extends Component {
    render() {
        return (
          <Container fluid>
            <Signup />
            <Footer />
          </Container>
        );
    }
}

export default SignupInfo;