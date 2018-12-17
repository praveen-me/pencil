import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { logOut } from '../../store/actions/authActions';
import {connect} from 'react-redux'
class LoginLinks extends Component {

  handleLogOut = e => {
    if(navigator.onLine) {
      this.props.dispatch(logOut())
    }
  }
  
  render() {
    const {currentUser} = this.props;
    return (
      <div className="auth-block">
        <button className="btn" onClick={this.handleLogOut}>
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
          <Link to={`/${currentUser.username}`}>
            Me
          </Link>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser : state.currentUser
  }
}

export default connect(mapStateToProps)(LoginLinks);