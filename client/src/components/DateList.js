import React from "react";
import DateListItem from "./DateListItem";

export default function DateList(props)
{
    return (
        <React.Fragment>
            {/* Header for the given list. */}
            <h1>{props.header}</h1>
            <div>
                {/* Create new date item for each date. */}
                {props.dates.map(date =>
                {
                    <DateListItem
                        title={date.title}
                        location={date.location ? date.location : null}
                        category={date.category}
                        tags={date.tags}
                        description={date.description}
                        rating={date.rating}
                    />;
                })}
            </div>
        </React.Fragment>
    );
}