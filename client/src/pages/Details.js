import React, {Component} from "react";
import Footer from "../components/Footer";
import { Container} from "../components/Grid";
import Details from "../components/DetailsCard"


class Detail extends Component {
    render() {
        return (
          <Container fluid>
              <Details />
            <Footer />
          </Container>
        );
    }
}

export default Detail;