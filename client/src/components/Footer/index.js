import React from "react";
import "./footer.css";

function Footer() {
  return (
      <footer className="container no-bg">
        <div className="footer-container">
          <p className="footer-text">2021 Spark.com</p>
          <div className="heart"></div>
          <a className="footer-link"
            href="https://github.com/Connerjm/Rate-a-Date"
            target="_blank"
            rel="noopener noreferrer"
          >
            view on github <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
  );
}

export default Footer;
