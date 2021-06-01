import React, {Component} from "react";
import Date from "../components/Date";


class Detail extends Component {
    render() {
        return (
              <section className="container">
                <div className="article">
                    <Date />
                </div>
              </section>
        );
    }
}

export default Detail;