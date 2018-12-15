import React, { Component } from 'react';
import AuthButton from './AuthButton';


class SignUp extends Component {
  render() {
    return (
      <div className="auth-container wrapper middle">
        <AuthButton />        
        <form className="auth-form">
          <input type="text" name="fullName" id="" placeholder="Enter you full name" />
          <input type="text" name="username" id="" placeholder="Enter your username"/>
          <input type="email" name="email" id="" placeholder="Enter your email"/>
          <input type="password" name="password" id="" placeholder="Enter your password"/>
          <button type="submit" className="btn started-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;