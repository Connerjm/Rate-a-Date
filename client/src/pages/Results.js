import React, {Component} from "react";
import DateList from "../components/DateList";
import API from "../utils/API";

class Detail extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getResults();
    }

    getResults() {
        this.setState({ posts: API.getPosts(sessionStorage.getItem("search-term"))});
    }

    render() {
        return (
          <section className="container">
              <article className="searchResults">
                 {/* <DateList header="Search Results" posts={this.state.posts}/> */}
              </article>
          </section>
        );
    }
}

export default Detail;