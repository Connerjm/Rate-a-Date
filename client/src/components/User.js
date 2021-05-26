//Imports.
import React from "react";
import TESTING from "./TESTING"
import DateListItem from "./DateListItem"
import "../index.css"
import {Row} from "./Grid"

//Component function. Set up just for to see the actual will be similar
const UserProfile = props => {
    return ( 
        <div className="card-body player">
            <div>
                <img src="/images/randoUser.png"/>
                <h2>Victor Anderson</h2>
                <a href="/" className="btn filled-default">Add a new Date</a> 
            </div>
            <div className="article">
                <h3>My Date Ideas</h3>
                    <li className="idea-list list-group-item">
                        <Row className="listResults row">
                            <TESTING component="DateListItem" />
                        </Row>
                    </li>
             </div>
        </div>
    )
}

export default UserProfile;


{/*(props.ideas.length === 0) ? (
        <div className="card-body">
            <div>
                <img src={props.userImage}/>
                <h2>{props.userName}</h2>
                <a href="/" className="btn filled-default">Add a new Date</a>
            </div>
            <div className="article">
                <h3>My Date Ideas</h3>
            </div>
        </div>
        ) : ( <div className="card-body">
                    <div className="article">
                        <h3>My Date Ideas</h3>
                        {props.ideas.map(idea => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={idea.title + "Card"} key={idea._id}>
                                        <DateListItem />
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div> */}