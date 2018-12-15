import React, { Component } from 'react';
import AuthButton from './AuthButton';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';


class SignUp extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      userInfo : {
        fullName : '',
        username : '',
        email : '',
        password : ''
      },
      isLoading : false,
      msg : ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      msg : '',
      userInfo : {
        ...this.state.userInfo,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    
    fetch('/api/signup',{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(this.state.userInfo)
    })
      .then(res => {
        if(res.status === 302) {
          res.json()
          .then(data => {
            return this.setState({
              msg : data.msg
            })
          })
        } else {
          res.json().then(data => {
            this.props.dispatch(signUp());
            this.props.history.push('/login');
          })
        }
      })
  }
  
  render() {
    const {msg} = this.state;
    return (
      <div className="auth-container wrapper middle">
        <AuthButton />        
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input type="text" 
          name="fullName" 
          placeholder="Enter you full name" 
          onChange={this.handleChange}
          required/>
          <input type="text" 
          name="username"
          placeholder="Enter your username" 
          onChange={this.handleChange}
          required/>
          <input type="email" 
          name="email" 
          placeholder="Enter your email" 
          onChange={this.handleChange}
          required/>
          <input type="password" 
          name="password" 
          placeholder="Enter your password" 
          onChange={this.handleChange}
          required/>
          {
            msg ? <p className="warning-box">{msg}</p> : ''
          }
          <button type="submit" className="btn started-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);