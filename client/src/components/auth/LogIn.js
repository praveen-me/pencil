import React, { Component } from 'react';
import AuthButton from './AuthButton';
import { connect } from 'react-redux';
import {logIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

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
      msg : '',
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
      .then(res => {
        if(res.status === 200) {
          res.json()
          .then(data => {
            // make action for data
            this.props.dispatch(logIn(data))
            console.log(data)
          })
        } else {
          res.json()
          .then(data => {
            this.setState({
              isLoading : false,
              msg : data.msg,
            })
          })
        }
      })
    } else {
      this.setState({
        isLoading : false,
        msg : "Please connected to a secure connection."        
      })
    }
  }
  
  render() {
    const {msg} = this.state;
    const {currentUser} = this.props;

    if(currentUser._id) return <Redirect to="/" />

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

function mapStateToProps(state) {
  return {
    currentUser : state.currentUser
  }
}

export default connect(mapStateToProps)(LogIn);