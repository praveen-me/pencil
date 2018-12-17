const initState = {
  allStories : [],
  lastStory : {},
  currentUser : {},
  userStories : []
}

export default function rootReducer(state = initState, action) {
  switch(action.type) {
    case "ADD_STORY": {
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

    case "LOGOUT" : {
      return {
        ...state,
        currentUser : {}
      };
    }

    case "SET_USER_STORIES": {
      console.log(action.data.userStories)
      // return state;
      return {
        ...state,
        userStories : [...action.data.userStories] 
      }
    } 

    default: return state;
  }
}