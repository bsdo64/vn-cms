import {combineReducers, createStore} from "redux";

// reducers.js
function theDefaultReducer (state = 0, action) {
  return state;
}

const firstNamedReducer = (state = 1, action) => state;

const secondNamedReducer = (state = 2, action) => state;

const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
});

// Use ES6 object literal shorthand syntax to define the object shape
export default rootReducer;