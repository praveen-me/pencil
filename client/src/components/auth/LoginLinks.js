import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LoginLinks extends Component {
  render() {
    return (
      <div className="auth-block">
        <button className="btn">
          <Link to="/">
            Log Out
          </Link>
        </button>
        <button className="btn">
          <Link to="/add-story">
            Add Story
          </Link>
        </button>
        <button className="btn started-btn">
          <Link to="/me">
            Me
          </Link>
        </button>
      </div>
    );
  }
}

export default LoginLinks;