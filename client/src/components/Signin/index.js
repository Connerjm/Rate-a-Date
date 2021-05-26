import React, {Component} from 'react';
import "../../../src/index.css"
import "./style.css";
import { Container, Row, Col } from "../Grid";

class Login extends Component {
    render() {
        return (

        <div id="login-card">
        <Container fluid>
          <div className="container">
          <div className="form-container">
            <form>
                <h2 className="section-header-spacing">Sign in</h2>
                <div className="form-group">
                    <label for="email-input">E-mail</label>
                    <input type="email" id="email-input" placeholder="E-mail" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="password-input">Password</label>
                    <input type="password" id="password-input" placeholder="Password" class="form-control" />
                </div>
                <div className="button-group">
                    <button className="large filled-default">Sign In</button>
                    <a href="/Signup" className="large outline-default">Signup for an account</a>
                    
                </div>
            </form>
            </div>
          </div>
          </Container>
        </div>
        );
    }
}

export default Login;