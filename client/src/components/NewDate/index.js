import React, { Component } from "react";
import "../../../src/index.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { newPost } from "../../actions/authActions";


const mapStyles = {
    width: '100%',
    height: '100%'
  };


class NewDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            occasion: "",
            description: "",
            address: "",
            username: "",
            id: ""

        };
    }
    
    componentDidMount() {
        this.getUser();
    }
    
    getUser() {
        let username = window.sessionStorage.getItem("user");
        this.setState({ username: window.sessionStorage.getItem("user")})
        console.log(username);
    }
 

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            category: this.state.category,
            occasion: this.state.occasion,
            address: this.state.address,
            description: this.state.description,
            username: this.state.username,
            id: this.state.title
        }
        console.log(postData)
        this.props.newPost(postData, this.props.history);
    }

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth;
        return (
            <div className="form-container">
                <h1 className="create-header-spacing icon-spacer">
                <i class="far fa-lightbulb icon-spacer"></i>
                  Add Date Idea</h1>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" id="title">Date name* (i.e. Fun with Victor)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.title}
                            id="title"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="description" id="description">Description (I just want to spend all my time with Victor)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.description}
                            id="description"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" id="category">Category* (i.e. Romantic Victor, Adventurous Victor, Sporty Victor)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.category}
                            id="category"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion" id="Occasion">Occasion (i.e. Victor's Birthday, Holiday with Victor, Valentines with Victor)</label>
                        <select 
                        onChange={this.onChange} 
                        value={this.state.occasion}
                        id="occasion"
                        type="dropdown"
                        className="form-control">
                            <option>Select One</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Holiday">Holiday</option>
                            <option value="ValentinesDay">Valentines Day</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="ThankYou">Thank You</option>
                            <option value="Halloween">Halloween</option>
                            <option value="Congratulations">Congratulations</option>
                            <option value="NewYear">New Year</option>
                            <option value="None">N/A</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address" id="address">Address (Victor's house)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.address}
                            id="address"
                            type="text"
                            className="form-control"
                        />
                        {/*<div className="card" id="map">
                            <Map
                                google={this.props.google}
                                zoom={14}
                                style={mapStyles}
                                initialCenter={
                                    {
                                        lat: -1.2884,
                                        lng: 36.8233
                                    }
                                }
                            />
                        </div>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture" id="picture">Add Photo</label>
                        <div className="button-group">
                        <button className="medium outline-default">
                            upload from my device
                                </button>
                        <button className="medium outline-danger">
                            Remove
                                </button>
                                </div>
                    </div>
                    <div className="button-group">
                        <button
                            type="submit"
                            className="large filled-default"
                        >
                            Save
                                </button>
                        <a href="/Profile" className="large filled-danger">
                            Cancel
                                    </a>
                    </div>
                </form>
            </div>
        )
    }
}


NewDate.propTypes = {
    newPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { newPost }
  )(withRouter(NewDate));


//export default GoogleApiWrapper({
    //apiKey: 'AIzaSyBaML4zWmgGYcFRxJCcSBr--JU9QP8PBIw'
  //})(NewDate); 