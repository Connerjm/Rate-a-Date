import React, {Component} from "react";
import User from "../components/Profile";
import { Container} from "../components/Grid";


class SignupInfo extends Component {
    render() {
        return (
          <Container fluid>
            <User />
          </Container>
        );
    }
}

export default SignupInfo;