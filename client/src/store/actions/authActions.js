export function signUp(data) {
  console.log(data, "in action");
  return {
    type : 'SIGNUP'
  }
}

export function logIn(data) {
  console.log(data, "in login action")
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