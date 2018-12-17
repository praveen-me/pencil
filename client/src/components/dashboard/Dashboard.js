import React, { Component } from 'react';
import { getAllStories } from '../../store/actions/storyActions';
import { connect } from 'react-redux';
import { setInitialUser } from '../../store/actions/authActions';
import {Link} from 'react-router-dom';
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
      this.props.dispatch(setInitialUser())
    })
  }

  render() { 
    const {allStories} = this.props;
    let isLoading = this.state.isLoading;

    if(allStories.length) {
      isLoading = false
    } else {
      isLoading = false;
    }
    
    return (
      <main>
        {
          isLoading ? <p>Loading....</p> : (
            <div className="wrapper-big">
              <div className="story-container">
                {
                  allStories && allStories.map(story => (
                    <Link to={`/story/${story._id}`} key={story._id}>
                      <div className="story" key={story._id}>
                        <div className="story-info-block">
                          <h3 className="story-head">
                          {story.title}
                          <p className="story-date">{new Date(story.date).toDateString()}</p>
                        </h3>
                        </div>
                        <p className="story-description">
                        {story.description.slice(0, 100)}...
                        </p>
                        <p className="story-author">By - {story.userName}</p>  
                      </div>
                    </Link>
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