import React, {Component} from "react";
import DateList from "../components/DateList";
import API from "../utils/API";

class Detail extends Component {
    state = {
        dates: []
    }

    componentDidMount() {
        this.getResults();
    }

    getResults() {
        this.setState({ dates: API.getDates(sessionStorage.getItem("search-term"))});
    }

    render() {
        return (
          <section className="container">
              <article className="searchResults">
                 {/* <DateList header="Search Results" dates={this.state.dates}/> */}
              </article>
          </section>
        );
    }
}

export default Detail;