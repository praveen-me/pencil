export function signUp(data) {
  return {
    type : 'SIGNUP'
  }
}

export function logIn(data) {
  return {
    type : 'LOGIN', 
    data
  }
}

export function setInitialUser() {
  return dispatch => {
    fetch('/api/isLoggedIn')
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type : "LOGIN",
          data
        })
      })
  }
}

export function logOut() {
  return dispatch => {
    fetch(`/api/logOut`)
      .then(res => res.json())
      .then(data => {
        return dispatch({
          type : "LOGOUT"
        })
      })
  }
}