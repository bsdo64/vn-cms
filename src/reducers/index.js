import { Map } from 'immutable';
import {combineReducers} from "redux";

const Login = (state = Map({}), action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN': {
      return state;
    }

    case 'REQUEST_SUCCESS_LOGIN': {
      return state.set('Auth', Map(action.payload));
    }

    default : {
      return state;
    }
  }
};

export const Domains = (state = Map({}), action) => state;

export const UI = combineReducers({
  Login,
});
