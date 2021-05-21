import React from "react";
import Stars from "./Stars";

export default function DateListItem(props)
{
    return (
        <div>
            <img />
            <div>
                {/* Top part with title and meta info. */}
                <div>
                    <h1>{props.title}</h1>
                    {/* Optional location. */}
                    {props.location !== null ? <p>{props.location}</p> : <></>}
                    {/* Always exactly one category. */}
                    <p>{props.category}</p>
                    {/* >= 0 tags. */}
                    {props.tags.map(tag =>
                    {
                        <p>{tag}</p>;
                    })}
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
                    <Stars />{/* Rating. TODO */}
                </div>
            </div>
        </div>
    );
}