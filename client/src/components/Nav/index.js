import React from "react";
import "./nav.css";

function NavBar() {
    

    return (
        <header className="header">
            {/*<button className="home"></button>*/}
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <img src="./spark.png" alt="logo" />
                </div>
                <div className="col-md-4 flex-row" id="pages">
                    <a href="/SignupSignin" id="login">Login</a>
                    <a href="/SignupSignin" id="signup">Signup</a>
                </div>
            </div>
            
             {/* These will be on the other pages just added to see what we need
                <a href="/" id="profile">Profile</a>
                <a href="/" id="signout">Sign Out</a>
             */}
            
        </header>
    );
}


export default NavBar;