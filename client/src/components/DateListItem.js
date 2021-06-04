//Imports.
import React from "react";
import Stars from "./Stars";

//Component function.
export default function DateListItem(props) {
  return (
    <div className="date-card">
      <div className="date-card-content">
        {/* <img className="date-img" href={props.image} alt="A depiction of the specified date"/> */}
        <img
          className="date-img"
          src="https://images.unsplash.com/photo-1549092273-8b23dde8ac2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
          alt="A depiction of the specified date"
        />
        {/* Top part with title and meta info. */}
        <div className="card-details-container">
          <div className="date-card-header">
            <h1 className="date-card-title">{props.title}</h1>
            <div className="button-group right">
              {/* Optional location. */}
              <p className="tag tag-text">{props.location}</p>
              {/* Always exactly one category. */}
              <p className="tag tag-text">{props.category}</p>
              {/* 0 or more tags. */}
              {/*{props.tags ? <ul>
                        {props.tags.map(tag =>
                            <li className="tag tag-text">{tag}</li>)}
                        </ul> : <></>} */}
            </div>
          </div>
          {/* Middle part with just the description. */}
          <p className="date-card-description">{props.description}</p>
          {/* Bottom part with buttons and rating. */}
          <div className="card-footer-container">
            <div className="button-group">
              <button className="medium filled-default">View details</button>
              <button className="medium outline-danger">Delete</button>
            </div>
            <Stars currentRating={props.currentRating} />
          </div>
        </div>
      </div>
    </div>
  );
}
