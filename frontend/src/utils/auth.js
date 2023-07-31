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
      body: JSON.stringify({email, password})
    })
    .then(res => this._checkResponse(res))
    .then((data) => {
      if(data.token){
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .then(result => {console.log(result);
      return result;
    })
  }

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers:{
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => this._checkResponse(res))
    // .then(data => data)
    .then(result => {console.log(result);
      return result;
    })
  }

}


export const auth = new Auth({
  url: 'https://auth.nomoreparties.co',
  headers: {"Content-Type": "application/json"}
})
