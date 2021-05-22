import React from "react";

function CategoryCard(props) {
    return (
        <div className="categoryCards p-2">
            <a href="./Search">
                <div className="card p" style={{ backgroundImage: `url(${props.image})` }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
}


export default CategoryCard;