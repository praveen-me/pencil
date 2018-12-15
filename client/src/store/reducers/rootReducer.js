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

    case "LOGIN" : {
      console.log(action.data.data, "in login reducer")
      const user = action.data.data
      
      const currentUser  = {
        ...user,
        userStories : []
      }

      return {
        ...state,
        currentUser
      }
    }

    default: return state;
  }
}