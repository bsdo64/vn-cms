export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_SUCCESS_LOGIN = 'REQUEST_SUCCESS_LOGIN';
export const REQUEST_FAIL_LOGIN = 'REQUEST_FAIL_LOGIN';

export function requestLogin (payload) {
  return {
    type: REQUEST_LOGIN,
    payload
  }
}