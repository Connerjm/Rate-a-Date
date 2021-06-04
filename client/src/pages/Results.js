import React, {Component} from "react";
import DateList from "../components/DateList";
import API from "../utils/API";

class Detail extends Component {
    state = {
        posts: [],
        userPosts: []
    }

    componentDidMount() {
        this.getResults();
    }

    getResults() {
        this.setState({ posts: API.getPosts(sessionStorage.getItem("search-term"))});
        API.getPost(this.state) 
        .then(res => {
            this.setState({
                userPosts: res.data
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
                  <DateList header="Search Results" posts={this.state.posts}/>
                 {/*{this.state.posts.length ? (
                     <DateList />
                 ) : (
                     <div>
                         <p>No results to display</p>
                     </div>
                 )}*/}
              </article>
          </section>
        );
    }
}

export default Detail;