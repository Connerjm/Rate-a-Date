import React, {Component} from "react";
import API from "../utils/API";

class Detail extends Component {
    state = {
        searchTerm: ""
    }

    componentDidMount() {
        this.setState({ searchTerm: sessionStorage.getItem("search-term")});
    }

    render() {
        return (
          <section className="container">
              <article className="searchResults">
                 
              </article>
          </section>
        );
    }
}

export default Detail;