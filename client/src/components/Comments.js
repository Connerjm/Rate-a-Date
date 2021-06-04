//Imports.
import React from "react";
import Comment from "./Comment";

//Component function.
export default function Comments(props)
{
    return (
        <div>
            <div>
                <h2>Comments ({props.comments ? props.comments.length : 0})</h2>
                <button className="large filled-default">Add Comment</button>
            </div>
            <div>
                {props.comments ? props.comments.map(comment =>
                    <Comment
                        title={comment.title}
                        currentRating={comment.currentRating}
                        comment={comment.comment}
                        username={comment.username}
                        date={comment.date}
                    />) : <></>}
            </div>
        </div>
    );
}