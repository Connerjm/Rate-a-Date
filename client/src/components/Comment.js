import React from "react";
import Stars from "./Stars";

export default function Comment(props)
{
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <Stars />
            </div>
            <p>{props.comment}</p>
            <div>
                <img />
                <p>{props.username}</p>
                <p>{props.date}</p>
            </div>
        </div>
    );
}