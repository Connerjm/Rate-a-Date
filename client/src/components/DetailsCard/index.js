import React from "react";
import TESTING from "../TESTING"
import "./style.css";

const Details = (props) => {
  return (
    <div>
        <section className="card">
            <div className="article">
                    <li className="idea-list list-group-item">
                        <div className="listResults row">
                            {/* <Date /> */}
                            <TESTING component="Date" />
                        </div>
                    </li>
             </div>
        </section>
    </div>
      
  );
};

export default Details;
