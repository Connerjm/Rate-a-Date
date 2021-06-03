import React, { Component } from "react";
import "./style.css";


class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = e => {
        this.setState({ search: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.search && this.state.search !== "")
        {
            sessionStorage.setItem("search-term", this.state.search);
            window.location.replace("/results");
        }
    }

    render() {
        return(
            <form noValidate onSubmit={this.onSubmit} className="searchForm flex">
                <input className="search"
                    value={this.state.search}
                    placeholder="Search for ideas"
                    type="text"
                    name="searchIdeas"
                    onChange={this.onChange}
                />
                <button type="submit" className="go"><i className="fa fa-search" id="sIcon"></i></button>
        </form> 
        )
    }
}

export default SearchForm;

