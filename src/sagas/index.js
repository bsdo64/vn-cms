import { take, call, put, all } from 'redux-saga/effects'
import Api from './api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login() {
  while(true) {
    const action = yield take("REQUEST_LOGIN");
    try {
      console.log(action);

      const user = yield call(Api.login, action.payload);
      yield put({type: "REQUEST_SUCCESS_LOGIN", payload: action.payload});
    } catch (e) {
      console.log(e);
      yield put({type: "REQUEST_FAIL_LOGIN", message: e.message});
    }
  }
}


/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
  yield all([
    login()
  ])
}

export default rootSaga;