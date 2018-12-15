const initState = {
  allStories : [],
  lastStory : {},
  currentUser : {}
}

export default function rootReducer(state = initState, action) {
  switch(action.type) {
    case "ADD_STORY": {
      console.log(action.data, "in reducer")
      return {
        ...state,
        lastStory : action.data
      }
    }

    case "GET_ALL_STORIES" : {
      return {
        ...state,
        allStories : action.data.allStories
      }
    }

    case "SIGNUP" : {
      return state
    }

    default: return state;
  }
}