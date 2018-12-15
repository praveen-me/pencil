import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AuthButton extends Component {
  render() {
    return (
      <div className="auth-btn-container">
          <button className="btn">
            <Link to="/login">
              Log in
            </Link>
          </button>
          <button className="btn">
            <Link to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
    );
  }
}

export default AuthButton;