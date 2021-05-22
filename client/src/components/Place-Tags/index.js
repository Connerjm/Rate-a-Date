import React from "react";
import Button from "../Button";



function PlaceTags(props) {

    return (
        <div 
        className="locationTags p-2">
           <Button btnText={props.name} link="./Search" />
        </div>
    );
}


export default PlaceTags;