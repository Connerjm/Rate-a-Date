import React from "react";
import "./nav.css";

function NavBar() {

    return (
        <header className="header">
                  <div> <button className="round hidden"><i class="fas fa-home"></i></button></div>
                    <img className="logo" src="https://raw.githubusercontent.com/FAC-73/zen-garden/c97a876ba046f32aab6e563ee158e349f3336006/spark_logo.svg" alt="logo" />
                <div id="pages">
                    <a href="/Signin" id="login">Login</a>
                    <a href="/Signup" id="signup">Signup</a>
                </div>
            
             {/* These will be on the other pages just added to see what we need
                <a href="/" id="profile">Profile</a>
                <a href="/" id="signout">Sign Out</a>
             */}
            
        </header>
    );
}


export default NavBar;