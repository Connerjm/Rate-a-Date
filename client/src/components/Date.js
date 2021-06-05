//Imports.
import React from "react";
import Stars from "./Stars";
import Comments from "./Comments";

//Component function.
export default function Date(props) {
    return (
        <div>
            {/* <img className="details-img" src={props.image} alt="Representation of the current date."/> */}
            <img className="details-img" src={props.photo}
            //"https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4219&q=80" alt="Representation of the current date." 
            />
            <div>
                <div className="details-section-header-spacing">
                <div>
                    <h1>{props.title}</h1>
                    <Stars currentRating={props.currentRating} />
                    </div>
                <div className="avatar-content-container">
                <div className="avatar-text-container">
                    <p className="username-text neutral">Submitted by</p>
                    <p className="username-text">{props.username}</p>
                    </div>
                    {/* <img className="avatar-sml" src={props.userthumbnail} alt="Thumbnail of the assosiated user."/> */}
                    <img className="avatar-sml" src="/images/randoUser.png" alt="Thumbnail of the assosiated user." /></div>
                    </div>
            </div>
            <div className="details-section-spacing">
            <h2>Description</h2>
            <p>{props.description}</p>
            <h2>Address</h2>
            <p>{props.address}</p>
            <div className="card">{props.map}</div>
            <Comments comments={props.comments} />
            </div>
        </div>
    );
}