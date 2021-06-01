import React from 'react';
import "../../../src/index.css"
import "./style.css";

const user = props => {
  return (
    <div className="user">
      <img src={props.image} alt="Thumbnail of user" />
      <h2>{props.username}</h2>
      <a href="/newdateidea" className="btn filled-default">Add a new Date</a> 
    </div>
  )
}
export default user;