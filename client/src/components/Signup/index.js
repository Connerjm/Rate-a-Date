import React, {Component} from 'react';
import "../../../src/index.css"
import "./style.css";

class Signup extends Component {

    render() {
        return (
        <div className="loginSignup" id="signup-card">
          <div className="card" style={{ background: "white" }}> 
            <form>
                <h2>Sign up for an account</h2>
                <div class="form-group">
                    <label for="username-input">Username</label>
                    <input type="text" id="username-input" placeholder="Username" className="form-control" />
                </div>
                <div class="form-group">
                    <label for="email-input">E-mail</label>
                    <input type="email" id="email-input" placeholder="E-mail" className="form-control" />
                </div>
                <div class="form-group">
                    <label for="password-input">Password</label>
                    <input type="password" id="password-input" placeholder="Password" class="form-control" />
                </div>
                <div>
                    <button className="btn filled-default">Create Account</button>
                    <a href="/Signin" className="btn outline-default">Login to existing account</a>
                </div>
            </form>
          </div>
        </div>
        );
    }
}

export default Signup;