import React, { Component } from "react";
import "../../../src/index.css";
import "./style.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';




const mapStyles = {
    width: '100%',
    height: '100%'
  };

class NewDate extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            category: "",
            description: "",
            address: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            category: this.state.category,
            address: this.state.address,
            description: this.state.description
        }
        //this.props.addPost(newPost, this.props.history);
        console.log(newPost)
    }

    render() {
        return (
            <div className="form-container">
                <h2 className="section-header-spacing">Add Date Idea</h2>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label htmlFor="title" id="title">Date name* (i.e. location, activity)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.title}
                            id="title"
                            type="text"
                        />
                    </div>
                    <div>
                    <label htmlFor="description" id="description">Description</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.description}
                            id="description"
                            type="text"
                        />
                    </div>
                    <div className="input-field form-group">
                        <label htmlFor="category" id="category">Category or Occasion* (i.e. Romantic, Adventure, Sporty, New Year)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.category}
                            id="category"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address" id="address">Address (Optional)</label>
                        <input
                            onChange={this.onChange}
                            value={this.state.address}
                            id="address"
                            type="text"
                        />
                        <div className="card" id="map">
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
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture" id="picture">Add Photo</label>
                        <button className="medium outline-default">
                            upload from my device
                                </button>
                        <button className="medium outline-danger">
                            Remove
                                </button>
                    </div>
                    <div className="button-group">
                        <button
                            type="submit"
                            className="large filled-default"
                        >
                            Save
                                </button>
                        <a href="/Profile" className="large outline-default">
                            Cancel
                                    </a>
                    </div>
                </form>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBaML4zWmgGYcFRxJCcSBr--JU9QP8PBIw'
  })(NewDate); 