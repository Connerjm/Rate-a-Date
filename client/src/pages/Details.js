import React, {Component} from "react";
import { Container} from "../components/Grid";
import Details from "../components/DetailsCard"


class Detail extends Component {
    render() {
        return (
          <Container fluid>
              <Details />
          </Container>
        );
    }
}

export default Detail;