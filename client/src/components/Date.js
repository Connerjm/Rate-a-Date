//Imports.
import React from "react";
import Stars from "./Stars";
import Comments from "./Comments";

//Component function.
export default function Date(props)
{
    return (
        <div>
            <img />
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <Stars currentRating={props.currentRating}/>
                </div>
                <div>
                    <p>Submitted by</p>
                    <p>{props.username}</p>
                    <img />
                </div>
            </div>
            <h2>Description</h2>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <Comments comments={props.comments} />
        </div>
    );
}