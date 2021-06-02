import React from "react";

function CatOccCard(props) {
    return (
        <div className="catOccCards p-5">
            <a href="/">
                <div className="card card-text" style={{ backgroundImage: `url(${props.image})` }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
}


export default CatOccCard;