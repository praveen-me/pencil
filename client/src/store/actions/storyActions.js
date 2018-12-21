export function addStory(data) {
  console.log(data, "in action")
  return {
    type : 'ADD_STORY',
    data
  }
}

export function getAllStories() {
  return dispatch => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type : "GET_ALL_STORIES",
          data
        })
      })
      .catch(err => {
        return dispatch({
          type : "GET_ALL_STORIES_ERR",
          err
        })
      })
  }
}

export function setUserStories(data) {
  return {
    type : "SET_USER_STORIES",
    data 
  }
}

export function setClaps(data) {
  
}