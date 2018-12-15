import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoutLinks from '../auth/LogoutLinks';
import LoginLinks from '../auth/LoginLinks';

class Header extends Component {
  render() {
    const {currentUser} = this.props;
    return (
      <header>
        <div className="wrapper top-wrapper">
          <div className="logo-container">  
            <Link to="/">
              <h1 className="logo"> Pencil </h1>
            </Link>
          </div>
          {
            currentUser._id ? <LoginLinks /> : <LogoutLinks />
          }
        </div>       
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser : state.currentUser
  }
}

export default connect(mapStateToProps)(Header);