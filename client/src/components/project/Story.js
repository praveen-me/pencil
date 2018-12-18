import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserClaps : 0, 
      msg : ''
    }
    this.interval = ''
  }

  handleMultipleClaps = e => {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        currentUserClaps : ++state.currentUserClaps
      }))
    }, 500)
  }
  
  clearMultipleClaps = e => {
    clearInterval(this.interval)
  }

  handleClaps = e => {
    const {currentUser, currentStory} = this.props;
    if(currentUser._id && currentStory.user !== currentUser._id && this.state.currentUserClaps < 50) {
      this.setState(state => ({
        currentStory : ++state.currentUserClaps
      }))
    }
  }

  componentDidUpdate() {
    const {currentUser, currentStory} = this.props;
    const {currentUserClaps} = this.state;
    fetch(`/api/stories/${currentStory._id}/clap`, {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        claps : currentUserClaps,
        userId : currentUser._id
      })
    }) 
  }

  render() {
    const {currentStory} = this.props;
    
    return (
      <main className="wrapper">
      <div className="single-story-conatiner">
        {
          currentStory._id ? (
            <div className="story_story-block">
              <div className="story-info-block">
                <h2 className="single_story-title">
                {currentStory.title}
                </h2>
                <span className="single_story-date">{new Date(currentStory.date).toDateString()}</span>
              </div>
              <p className="single_story-description">
                {currentStory.description}
              </p>
              <div className="single_story-author">
                <h4 className="story-author">By - {currentStory.userName}</h4>
                <div className="clap-block">
                  <button 
                  onMouseDown={this.handleMultipleClaps} onClick={this.handleClaps} onMouseUp={this.clearMultipleClaps} >Clap</button>
                  <span>{currentStory.claps+this.state.currentUserClaps}</span>
                </div>
              </div>
            </div>
          ) : ''
        }
      </div>
    </main>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const currentStory = state.allStories.filter(story => story._id === ownProps.match.params.id);
  
  return {
    storyId : ownProps.match.params.id,
    currentUser : state.currentUser,
    currentStory : currentStory[0]   
  }
}

export default connect(mapStateToProps)(Story);