import React, { Component } from 'react';
import AuthButton from './AuthButton';

class LogIn extends Component {
  render() {
    return (
      <div className="auth-container wrapper middle">
        <AuthButton />        
        <form className="auth-form">
          <input type="text" name="username" placeholder="Enter your username"/>
          <input type="password" name="password" placeholder="Enter your password"/>
          <button type="submit" className="btn started-btn">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;