import { Map } from 'immutable';
import {combineReducers, createStore} from "redux";

export const Domains = (state = Map({}), action) => state;

export const UI = (state = Map({}), action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN': {
      const newMap = state.set('Auth', Map(action.payload));
      console.log(newMap);

      return newMap;
    }

    case 'REQUEST_SUCCESS_LOGIN': {
      return state;
    }

    default : {
      return state;
    }
  }
};
