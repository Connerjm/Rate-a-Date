import React from "react";
import Comment from "./Comment";

export default function Comments(props)
{
    return (
        <div>
            <div>
                <h2>Comments ({props.comments.length - 1})</h2>
                <button>Add review</button>
            </div>
            <div>
                {props.comments.map(comment =>
                {
                    <Comment
                        title={comment.title}
                        comment={comment.comment}
                        username={comment.username}
                        date={comment.date}
                    />;
                })}
            </div>
        </div>
    );
}