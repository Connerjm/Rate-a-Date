//Imports.
import React from "react";
import MetaTags from "./MetaTags";
import Stars from "./Stars";

function handleClick()
{
  window.location.replace("/details");
}

//Component function.
export default function DateListItem(props) {
  return (
    <div className="date-card fade-in three">
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
              <MetaTags type="location" content={props.address}/>
              {/* Always exactly one category. */}
              <MetaTags type="category" content={props.category} />
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
              <button className="medium filled-default" onClick={handleClick}>View details</button>
              <button className="medium outline-danger">Delete</button>
            </div>
            <Stars currentRating={props.currentRating} />
          </div>
        </div>
      </div>
    </div>
  );
}
