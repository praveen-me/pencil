import React, { Component } from 'react';
import AuthButton from './AuthButton';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        username : '',
        password : ''
      },
      isLoading : false,
      msg : ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      userInfo: {
        ...this.state.userInfo,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading : true
    })
    if(navigator.onLine) {
      fetch(`/api/login`, {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(this.state.userInfo)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    } else {
      this.setState({
        isLoading : false,
        msg : "Please connected to a secure connection."        
      })
    }
  }
  
  render() {
    const {msg} = this.state;
    return (
      <div className="auth-container wrapper middle">
        <AuthButton />        
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Enter your username" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Enter your password"
          onChange={this.handleChange}/>
          {
            msg ? <p className="warning-box">{msg}</p> : ''
          }
          <button type="submit" className="btn started-btn">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;