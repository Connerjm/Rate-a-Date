import React from "react";
import "./nav.css";


function NavBar() {
    return (
        <header className="header">
                  <div><a href="/" className="btn round"><i class="fas fa-home"></i></a></div>
                    <img className="logo" src="https://raw.githubusercontent.com/FAC-73/zen-garden/c97a876ba046f32aab6e563ee158e349f3336006/spark_logo.svg" alt="logo" />
                <div id="pages">
                    <a href="/login" id="login">Login</a>
                    <a href="/register" id="signup">Signup</a>
                </div>
            
        </header>
    );
}

  
  export default NavBar;