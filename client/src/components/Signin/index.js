import React, {Component} from 'react';
import "../../../src/index.css"
import "./style.css";

class Login extends Component {
    render() {
        return (
        <div className="loginSignup" id="login-card">
          <div className="card" style={{background: "white"}}> 
            <form>
                <h2>Sign in</h2>
                <div className="form-group">
                    <label for="email-input">E-mail</label>
                    <input type="email" id="email-input" placeholder="E-mail" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="password-input">Password</label>
                    <input type="password" id="password-input" placeholder="Password" class="form-control" />
                </div>
                <div>
                    <button className="btn filled-default">Signin</button>
                    <a href="/Signup" className="btn outline-default">Signup for an account</a>
                </div>
            </form>
          </div>
        </div>
        );
    }
}

export default Login;