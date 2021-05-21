import React from "react";
import Comment from "./Comment";

export default function Comments(props)
{
    return (
        <div>
            <div>
                <h2>Comments ({props.comments ? props.comments.length : 0})</h2>
                <button>Add Comment</button>
            </div>
            <div>
                {props.comments ? props.comments.map(comment =>
                    <Comment
                        title={comment.title}
                        comment={comment.comment}
                        username={comment.username}
                        date={comment.date}
                    />) : <></>}
            </div>
        </div>
    );
}