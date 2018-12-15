import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LogoutLinks extends Component {
  render() {
    return (
      <div className="auth-block">
        <button className="btn">
          <Link to="/login">
            Log in
          </Link>
        </button>
        <button className="btn started-btn">
          <Link to="/signup">
            Get Started
          </Link>
        </button>
      </div> 
    );
  }
}

export default LogoutLinks;