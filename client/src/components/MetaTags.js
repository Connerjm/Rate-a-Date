//Imports.
import React from "react";

//Component function.
export default function MetaTags(props)
{
    return (
        <div>
            {type(props.type)}
            {props.content}
        </div>
    );
}

//Helper function.
function type(type)
{
    let icon;
    if (type === "location")
        icon = <i className="fas fa-map-marker-alt"></i>;
    else if (type === "category")
        icon = <i class="fas fa-folder-open"></i>;
    else if (type === "tag")
        icon = <i class="fas fa-tag"></i>;
    return icon;
}