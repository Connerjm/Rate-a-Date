//Imports.
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken.js";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";

//Components.
import NavBar from "./components/Nav/";
import Footer from "./components/Footer";
import Signup from "./pages/Register";
import Login from "./pages/Login";
import NewDateIdea from "./pages/NewDate"


//Pages.
import Home from "./pages/Home"
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Details from "./pages/Details";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


//Component function.
export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/Details" component={Details} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newdateidea" component={NewDateIdea} />
          <PrivateRoute exact path="/Profile" component={Profile} />

          {/*<Route exact path="/Profile" component={Profile}  User info  /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>
  );
}