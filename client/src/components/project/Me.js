import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInitialUser } from '../../store/actions/authActions';
import {Redirect, Link} from 'react-router-dom';
import { setUserStories } from '../../store/actions/storyActions';

class Me extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : false,
      msg : ''
    }
  }
  
  componentDidMount() {
    const {currentUser}  = this.props;
    
    this.setState({
      isLoading : true
    })
    
    // this.props.dispatch(setInitialUser()) 
    if(!currentUser._id) return this.props.history.push('/')
    console.log(this.props.match.params.username)
    if(currentUser.username) {
      fetch(`/api/${this.props.match.params.username}/stories`)
      .then(res => {
        if(res.status === 302) {
          res.json()
          .then(data => {
            this.setState({
              isLoading : false,
              msg : data.msg 
            })
          })
        } else {
          res.json()
          .then((data) => {
            this.props.dispatch(setUserStories(data))
            this.setState({
              isLoading : false
            })
          })
        }
      })
    }

  }
  
  render() {
    const {currentUser, userStories} = this.props;
    const {isLoading, msg} = this.state;
    return (
      <main className="wrapper-big">
        <div className="me-container">
          <div className="profile-block">
            <div className="profile-info">
              <p className="profile-fullName profile-details">{currentUser.fullName}</p>
              <p className="profile-username profile-details">{currentUser.username}</p>
              <p className="profile-email profile-details">{currentUser.email}</p>
              <p className="profile-details">About : Empty</p>
            </div>          
          </div>
          <div className="profile_story-container">
              <h3 className="story-head">
                Your Stories
              </h3>
              {
                msg ? <p className="empty-box">{msg}</p> : (
                  <div className="story-block">
                  {
                    userStories && userStories.map(story => (
                      <Link to={`/story/${story._id}`} key={story._id}>
                        <div className="story-info">
                          <h3 className="story-title">{story.title}</h3>
                          <p className="story-date">{new Date(story.date).toDateString()}</p>
                        </div>
                      </Link>
                    ))
                  }
                  </div>
                )
              }
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser : state.currentUser,
    userStories : state.userStories
  }
}

export default connect(mapStateToProps)(Me);