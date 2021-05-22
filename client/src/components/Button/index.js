import React from "react";
import "./style.css";

function Button(props) {
    return (
    <div className="large filled-default cstBtn">
        <a href={props.link}>
            <div className="content">
                {props.btnText}
            </div>
        </a>
    </div>
    );
}

export default Button;