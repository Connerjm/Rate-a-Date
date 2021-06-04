//Imports.
import React from "react";
import DateListItem from "./DateListItem";

//Component function.
export default function DateList(props)
{
    return (
        <React.Fragment>
            {/* Header for the given list. */}
            <h1>{props.header}</h1>
            <div>
                {/* Create new date item for each date. */}
                {props.dates.map(post =>
                    <DateListItem
                        title={post.title}
                        location={post.location}
                        category={post.category}
                        tags={post.tags}
                        description={post.description}
                        rating={post.rating}
                    />)}
            </div>
        </React.Fragment>
    );
}