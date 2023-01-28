// test (email, password): jfurjeuf@test.ru
const BASE_URL = 'https://auth.nomoreparties.co';

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
        if (res.ok) return res.json();
      } catch (err) {
        return (err)
      }
    })
    .then(res => res)
    .catch(err => console.log(err));
};

export function authorizeUser(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
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
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
};
