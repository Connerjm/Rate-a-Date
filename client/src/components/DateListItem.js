import React from "react";
import Stars from "./Stars";

export default function DateListItem(props)
{
    return (
        <div>
            <img href={props.image} alt="A depiction of the specified date."/>
            <div>
                {/* Top part with title and meta info. */}
                <div>
                    <h1>{props.title}</h1>
                    {/* Optional location. */}
                    {<p>{props.location}</p>}
                    {/* Always exactly one category. */}
                    <p>{props.category}</p>
                    {/* 0 or more tags. */}
                    {props.tags ? <ul>
                        {props.tags.map(tag =>
                            <li>{tag}</li>)}
                    </ul> : <></>}
                </div>
                {/* Middle part with just the description. */}
                <p>{props.description}</p>
                {/* Bottom part with buttons and rating. */}
                <div>
                    <div>
                        <button>
                            View details
                        </button>
                        <button>
                            Delete
                        </button>
                    </div>
                    <Stars currentRating={props.currentRating}/>
                </div>
            </div>
        </div>
    );
}