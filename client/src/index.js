import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//import TESTING from "./components/TESTING";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<TESTING component="DateList"/>, document.getElementById("root"));
registerServiceWorker();
