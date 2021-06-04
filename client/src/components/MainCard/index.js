import React, { Component } from "react";
import "./style.css";

class MainCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ""
    };
}
  
onChange = e => {
  this.setState({ [e.target.id]: e.target.value})
}
onSubmit = e => {
  e.preventDefault();
  //console.log(e.target.value)
  let value = e.target.value;
  console.log(value)
  if( value && value !== "") {
    sessionStorage.setItem("search-term", value);
    window.location.replace("/results")
  }
  
}

  render() {
  return (
      <div>
        <div className="row">
          <div className="col-12">
            <div className="section-header-spacing">
              <i className="fas fa-map-marker-alt">
                <span className="pl-3">Dates by Location</span>
              </i>
            </div>
            <div className="row">
              <div className="locationTags p-2" onChange={this.onChange} >
                <button className="large filled-default cstBtn" className="large filled-default cstBtn" value="Seattle" onClick={this.onSubmit}>
                  Seattle
              </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Los Angeles" onClick={this.onSubmit}>
                  Los Angeles
                </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Austin" onClick={this.onSubmit}>
                  Austin
                </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Portland" onClick={this.onSubmit}>
                  Portland
                </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Chicago" onClick={this.onSubmit}>
                  Chicago
              </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Austin" onClick={this.onSubmit}>
                  Austin
            </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Miami" onClick={this.onSubmit}>
                  Miami
            </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="New York" onClick={this.onSubmit}>
                  New York
            </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="Philadelphia" onClick={this.onSubmit}>
                  Philadelphia
            </button>
              </div>
              <div className="locationTags p-2" onChange={this.onChange}>
                <button className="large filled-default cstBtn" value="N/A" onClick={this.onSubmit}>
                  No Location
              </button>
              </div>
            </div>
          </div>
        </div>

      <div className="row">
        <div className="col-12">
          <div className="section-header-spacing">
            <i className="fas fa-map-marker-alt">
              <span className="pl-3">Dates by Category</span>
            </i>
          </div>
          <div className="row">
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/adventure.png)` }}
                  value="adventure" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Adventure</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/gaming.png)` }}
                  value="gaming" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Gaming</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/sports.png)` }}
                  value="Sports" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Sports</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/arts.png)` }}
                  value="Arts" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Arts</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/entertainment.png)` }}
                  value="Entertainment" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Entertainment</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/Romance.png)` }}
                  value="Romance" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Romance</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/food.png)` }}
                  value="Food" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Food and Drink</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/pets.png)` }}
                  value="Pets" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Pets</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

          <div className="col">
            <div className="section-header-spacing">
              <i className="fas fa-map-marker-alt">
                <span className="pl-3">Dates by Occasion</span>
              </i>
            </div>
          <div className="row">
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/birthday.png)` }}
                  value="Birthday" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Birthday</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/holidays.png)` }}
                  value="Holidays" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Holidays</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/valentines.png)` }}
                  value="Valentines" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Valentines</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/anniversary.png)` }}
                  value="Anniversary" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Anniversary</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/thankyou.png)` }}
                  value="Thank You" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Thank You</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/halloween.png)` }}
                  value="Halloween" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Halloween</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/congrats.png)` }}
                  value="Congratulations" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">Congratulations</h5>
                  </div>
                </button>
              </div>
            </div>
            <div className="catOccCards p-5" >
              <div onChange={this.onChange}>
                <button className="card card-text"
                  style={{ backgroundImage: `url(images/occasions/newYear.png)` }}
                  value="New Year" onClick={this.onSubmit}>
                  <div className="card-body">
                    <h5 className="card-title">New Year</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainCard;
