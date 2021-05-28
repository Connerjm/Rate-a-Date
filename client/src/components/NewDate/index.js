import React, { Component } from "react";
import { Container} from "../Grid";
import "../../../src/index.css";
import "./style.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';




const mapStyles = {
    width: '100%',
    height: '100%'
  };

class NewDate extends Component {

    render() {
        return (
            <div className="newDate">
                <div className="container">
                <Container fluid>
                    <div className="form-container">
                    <h2 className="section-header-spacing">Add Date Idea</h2>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="title" id="title">Date name* (i.e. location, activity)</label>
                                <input
                                    onChange={this.onChange}
                                    //value={this.state.username}
                                    id="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category" id="category">Category* (i.e. Romantic, Adventure, Sporty)</label>
                                <input
                                    onChange={this.onChange}
                                    //value={this.state.username}
                                    id="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="occasion" id="Occasion">Occasion (i.e. Birthday, Holidays, Valentines)</label>
                                <select>
                                    <option>Select One</option>
                                    <option>Birthday</option>
                                    <option>Holiday</option>
                                    <option>Valentines Day</option>
                                    <option>Anniversary</option>
                                    <option>Thank You</option>
                                    <option>Halloween</option>
                                    <option>Congratulations</option>
                                    <option>New Year</option>
                                    <option>N/A</option>
                                </select>
                            </div>
                            <div className="form-group">
                            <label htmlFor="address" id="address">Address (Optional)</label>
                                <input
                                    onChange={this.onChange}
                                    //value={this.state.username}
                                    id="form-control"
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
                </Container>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBaML4zWmgGYcFRxJCcSBr--JU9QP8PBIw'
  })(NewDate); 