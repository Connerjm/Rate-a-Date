import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "../../../src/index.css";
import "./style.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/Profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Profile");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
    
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="form-container">
        <h2 className="section-header-spacing">Sign in</h2>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("form-control", {
                invalid: errors.email || errors.emailnotfound
              })}
            />
            <span>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("form-control", {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
            <span>
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div className="button-group" style={{ paddingLeft: "11.250px" }}>
            <button
              type="submit"
              className="large filled-default"
            >
              Login
                </button>
            <a href="/register" className="large outline-default">Signup for an account</a>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));