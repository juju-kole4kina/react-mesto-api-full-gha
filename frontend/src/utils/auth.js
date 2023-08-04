export default class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({password, email})
    })
    .then(res => this._checkResponse(res))

    .then(result => {console.log(result);
      return result;
    })
  }

  autorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(res => this._checkResponse(res))
    .then((data) => {
        return data;
    })
    .then(result => {console.log(result);
      return result;
    })
  }

  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
    .then(result => {console.log(result);
      return result;
    })
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
    .then(res => this._checkResponse(res))
    .then(result => {console.log(result);
      return result;
    })
  }
}

export const auth = new Auth({
  url: 'http://localhost:4000',
  headers: {"Content-Type": "application/json"}
})
