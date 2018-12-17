import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {
  render() {
    const {allStories, storyId} = this.props;
    const currentStory = allStories.filter(story => story._id === storyId);
    
    return (
      <main className="wrapper">
      <div className="single-story-conatiner">
        {
          currentStory[0]._id ? (
            <div className="story_story-block">
              <div className="story-info-block">
                <h2 className="single_story-title">
                {currentStory[0].title}
                </h2>
                <span className="single_story-date">{new Date(currentStory[0].date).toDateString()}</span>
              </div>
              <p className="single_story-description">
                {currentStory[0].description}
              </p>
              <div className="single_story-author">
                <h4 className="story-author">By - {currentStory[0].userName}</h4>
                <a>Claps - {currentStory[0].claps}</a>
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
  return {
    allStories : state.allStories,
    storyId : ownProps.match.params.id   
  }
}

export default connect(mapStateToProps)(Story);