import React from "react";

function NavBar() {
    

    return (
        <header className="header">
            <button className="home"></button>
            <div className="row">
                <div></div>
                <div className="logo">
                </div>
            </div>
            <a href="/" id="login">Login</a>
            <a href="/" id="logout">Signup</a>
             {/* These will be on the other pages just added to see what we need
                <a href="/" id="profile">Profile</a>
                <a href="/" id="signout">Sign Out</a>
             */}
            
        </header>
    );
}


export default NavBar;