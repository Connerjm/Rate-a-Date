import React, {Component} from "react";
import { Container} from "../components/Grid";
import Signup from "../components/Signup"

class SignupInfo extends Component {
    render() {
        return (
          <Container fluid>
            <Signup />
          </Container>
        );
    }
}

export default SignupInfo;