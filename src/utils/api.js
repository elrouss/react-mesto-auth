const apiSettings = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'ab13029f-8c56-4dec-b26e-24c2c3894c0c',
    'Content-type': 'application/json'
  }
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  };

  _request(url, options) {
    return fetch(url, options)
      .then(this._checkResponse);
  };

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      Promise.reject(`Ошибка: ${response.status}/${response.statusText}`);
    };
  };

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });
  };

  setUserInfo(name, about) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    });
  };

  setUserAvatar(avatar) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar })
    });
  };

  getPhotocards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers
    });
  };

  addNewСard(name, link) {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    });
  };

  deleteСard(id) {
    return this._request(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    });
  };

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this._request(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers
      });
    } else {
      return this._request(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers
      });
    };
  };
};

export const api = new Api(apiSettings);
