export function signUp(userCreds, cb) {
  return (dispatch) => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCreds),
    })
      .then((res) => {
        if (res.status === 302) {
          res.json()
            .then((data) => {
              cb(data);
              return dispatch({
                type: 'SIGNUP_ERR',
              });
            });
        } else {
          res.json()
            .then((data) => {
              cb(true);
              return dispatch({
                type: 'SIGNUP',
              });
            });
        }
      });
  };
}

export function logIn(userCreds, cb) {
  return (dispatch) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCreds),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json()
            .then((data) => {
              // make action for data
              cb(true);
              return dispatch({
                type: 'LOGIN',
                data,
              });
            });
        } else {
          res.json()
            .then((data) => {
              cb(data);
            });
        }
      });
  };
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