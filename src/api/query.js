/**
 *
 * Initer data
 * @param  {[type]} query [description]
 * @return {[type]}        [description]
 */
export default function query(text) {
  return new Promise((resolve, reject) => {
    const headers = { Accept: 'application/json', 'Content-Type': 'application/json' }
    const body = { text };
    const API_URL = 'http://localhost:5000';

    window.fetch(`${API_URL}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      resolve(result)
    })
    .catch((err) => {
      return reject(err);
    })
  });
}
