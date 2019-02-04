import React, { Component } from 'react';
import AuthButton from './AuthButton';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import Loader from '../project/Loader';

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
  // function for handling data when submitting
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    })

    this.props.dispatch(signUp(this.state.userInfo, (isSucced) => {
      if(isSucced === true) {
        this.setState({
          isLoading: false,
        });
        this.props.dispatch(signUp());
        this.props.history.push('/login');
      } else if (isSucced.msg) {
        this.setState({
          isLoading : false,
          msg : data.msg
        })
      }
    }))
  }
  
  render() {
    const {msg, isLoading} = this.state;
    return (
      isLoading ? <Loader /> : (
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
      )
    );
  }
}

export default connect()(SignUp);