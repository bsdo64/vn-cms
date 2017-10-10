import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from 'superagent'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(Api, action.payload.userId);
    yield put({type: "REQUEST_SUCCESS_LOGIN", user: user});
  } catch (e) {
    yield put({type: "REQUEST_FAIL_LOGIN", message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("REQUEST_LOGIN", fetchUser);
}

export default mySaga;