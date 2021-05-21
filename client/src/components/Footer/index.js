import React from "react";
import "./footer.css"

function Footer() {
    

    return (
        <footer>
            <div className="row" id="footer">
                <div className="col-md-4"><p>2021 Spark.com</p></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <a href="https://github.com/Connerjm/Rate-a-Date" target="_blank" rel="noopener noreferrer">view on github <i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
}


export default Footer;