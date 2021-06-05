import React, {Component} from "react";
import Date from "../components/Date";


class Detail extends Component {
    render() {
        return (
              <section className="container">
                <div className="article">
                    <Date
                        title="Seattle Waterfront"
                        currentRating={4}
                        username="sparkiboi"
                        description="Lots to see on the waterfront."
                        address="Seattle"
                    />
                </div>
              </section>
        );
    }
}

export default Detail;