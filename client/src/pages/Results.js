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
        API.getPosts(sessionStorage.getItem("search-term")) 
        .then(res => {
            this.setState({
                posts: res.data
            })
            console.log("This is the res from posts", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    render() {
        return (
          <section className="container">
              <article className="searchResults">
                 {this.state.posts.length ? ( <DateList header="Search Results" posts={this.state.posts} /> ) : ( <p>No results to display</p> )}
              </article>
          </section>
        );
    }
}

export default Detail;