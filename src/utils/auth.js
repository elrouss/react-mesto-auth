const BASE_URL = 'https://auth.nomoreparties.co';
// TODO: ОПТИМИЗИРОВАТЬ КОД (DRY), настроить ошибки в промисах
// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     Promise.reject(`Ошибка: ${res.status}/${res.statusText}`);
//   };
// };

// function request(url, options) {
//   return fetch(url, options)
//     .then(checkResponse())
// }

export function registerUser(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        };
      } catch (err) {
        return (err)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export function authorizeUser(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        const token = data.token;
        localStorage.setItem('jwt', token);

        return token;
      };
    })
    .catch(err => console.log(err))
};

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
};
