export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers['authorization'];
  }

_checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

getInitialCard() {
  return fetch(`${this._url}/cards`, {
    headers: {
      authorization: this._authorization
    }
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

setUserInfo(data) {
  console.log(`data sui: ${data}`);
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
  return result;
})
}

setUserAvatar(data) {
  console.log(`data sua: ${data}`);
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      // avatar: data.link,
      avatar: data.avatar,
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

addNewCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers:this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

cardDelete(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {authorization: this._authorization}
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(`cardDelete: ${result}`);
    return result;
  })
}

putCardLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

deleteCardLike(cardId) {
  return fetch(`${this._url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => this._checkResponse(res))
  .then(result => {console.log(result);
    return result;
  })
}

changeLikeCardStatus(cardId, isLiked) {
  return isLiked ? this.putCardLike(cardId) : this.deleteCardLike(cardId);
}
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'e66028db-2d04-435a-b30a-e2914b0c1191',
    'Content-Type': 'application/json'
  }
});
