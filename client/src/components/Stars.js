import ReactStars from "react-rating-stars-component";
import React from "react";

export default function Stars(props)
{
    return (
        <ReactStars
            //onChange={SaveRating}
            size={24}
            value={props.currentRating}
        />
    );
}