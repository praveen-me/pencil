import React, { Component } from 'react';
import { getAllStories } from '../../store/actions/storyActions';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : false
    }
  }
  
  componentWillMount() {
    this.setState({
      isLoading : true
    }, () => {
      this.props.dispatch(getAllStories())
    })
  }

  render() { 
    const {allStories} = this.props;
    let isLoading = this.state.isLoading;
    
    if(allStories.length) {
      isLoading = false
    }
    
    return (
      <main>
        {
          isLoading ? <p>Loading....</p> : (
            <div className="wrapper-big">
              <div className="story-container">
                {
                  allStories && allStories.map(story => (
                    <div className="story" key={story._id}>
                      <h3 className="story-head">
                      {story.title}
                      </h3>
                      <p className="story-description">
                      {story.description}
                      </p>  
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    allStories : state.allStories
  }
}

export default connect(mapStateToProps)(Dashboard);