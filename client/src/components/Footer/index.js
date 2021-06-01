import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="row">
      <footer>
        <div className="footer-container">
          <p className="footer-text">2021 Spark.com</p>

          <a className="footer-link"
            href="https://github.com/Connerjm/Rate-a-Date"
            target="_blank"
            rel="noopener noreferrer"
          >
            view on github <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
