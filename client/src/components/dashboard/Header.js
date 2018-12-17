import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LogoutLinks from '../auth/LogoutLinks';
import LoginLinks from '../auth/LoginLinks';
import { setInitialUser } from '../../store/actions/authActions';


class Header extends Component {
  componentDidMount() {
    this.props.dispatch(setInitialUser())    
  }
  
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