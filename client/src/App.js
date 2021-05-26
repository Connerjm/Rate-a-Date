//Imports.
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components.
import NavBar from "./components/Nav/";
import Footer from "./components/Footer";

//Pages.
import Home from "./pages/Home"
import Results from "./pages/Results";
import LoginInfo from "./pages/Signin";
import SignupInfo from "./pages/Signup";
import Profile from "./pages/Profile";
import Details from "./pages/Details";

//Component function.
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/Details" component={Details} />
          <Route exact path="/Signin" component={LoginInfo} />
          <Route exact path="/Signup" component={SignupInfo} />

          <Route exact path="/profile" component={Profile} /* User info */ />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}