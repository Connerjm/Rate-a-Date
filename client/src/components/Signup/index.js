import React, {Component} from 'react';
import "../../../src/index.css";
import "./style.css";
import { Container, Row, Col } from "../Grid";

class Signup extends Component {

    render() {
        return (
        <div id="signup-card">
        <Container fluid>
          <div className="container">
          <div className="form-container">
            <form>
                <h2 className="section-header-spacing">Sign up for an account</h2>
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
                <div className="button-group">
                    <button className="large filled-default">Create Account</button>
                    <a href="/Signin" className="large outline-default">Login to existing account</a>
                </div>
            </form>
            </div>
          </div>
          </Container>
        </div>
        );
    }
}

export default Signup;