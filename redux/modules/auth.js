// import
import UserInfo from "../../assets/UserInfo";
import { AsyncStorage, Alert } from "react-native";
import API_URL from "../../constants/Api";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// action creators
function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}

function logout() {
  return {
    type: LOG_OUT
  };
}

function signup(username, password) {
  return dispatch => {};
}

// api actions
function login(username, password) {
  return dispatch => {
    fetch(`${API_URL}/api/auth/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(setLogIn(json.token));
        } else {
          Alert.alert("Something went wrong, try again");
        }
      });
  };
}
// initialState
const defaultState = {
  isLoggedIn: false
};

// reducer
function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOG_IN:
      return applySetLogIn(state, action);
    case LOG_OUT:
      return applySetLogOut(state, action);
    default:
      return state;
  }
}

// reducer actions
function applySetLogIn(state, action) {
  const { token } = action;
  AsyncStorage.setItem("token",token);
  return {
    ...state,
    token,
    isLoggedIn: true,
  };
}

function applySetLogOut(state, action) {
  AsyncStorage.clear();
  
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

// exports
const actionCreators = {
  login,
  logout,
  signup
};

export { actionCreators };

export default reducer;
