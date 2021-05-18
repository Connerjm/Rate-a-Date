import React from "react";
import Stars from "./Stars";
import Comments from "./Comments";

export default function Date(props)
{
    return (
        <div>
            <img />
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <Stars />{/* TODO */}
                </div>
                <div>
                    <p>Submitted by</p>
                    <p>{props.username}</p>
                    <img />
                </div>
            </div>
            <h2>Details</h2>
            <p>{props.description}</p>
            {props.address !== null ? props.address : <></>}
            <Comments comments={props.comments} /> {/* TODO */}
        </div>
    );
}