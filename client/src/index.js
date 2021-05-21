import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//import Test from "./components/Test";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Testing />, document.getElementById("root"));
registerServiceWorker();
