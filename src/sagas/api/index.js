import request from 'superagent';

class Api {
  async login(user) {
    const res = await request
      .post('/ajax/login')
      .send(user)
      .set('Accept', 'application/json');

    return res;
  }
}

export default new Api();